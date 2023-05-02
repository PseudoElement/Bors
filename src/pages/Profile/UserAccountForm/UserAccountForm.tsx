import { FC, useEffect, ChangeEvent, useState } from 'react'
import cn from 'classnames'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { Button, Input, Loading } from 'components'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { userUpdate } from 'shared/api/routes/user'
import { userUpdateResponse } from 'store/slices/userSlice'

import { User } from 'shared/types/user'
import { setAddValues } from 'shared/helpers/setAddValues'
import { EMAIL_VALIDATION_REG, NUMBER_REG_EXP } from 'shared/constants/regExp'
import { formatTelNumber } from 'shared/helpers/formatTelNumber'
import { formatPersonNumber } from 'shared/helpers/formatPersonNumber'
import { mock_user_fields } from 'shared/mocks/mock_userAccount'

import s from './UserAccountForm.module.scss'

export const UserAccountForm: FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user.user)
  const app = useAppSelector(state => state.app)
  const [isOpenExample, setIsOpenExample] = useState(false)

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm<User>({
    defaultValues: {
      name: '',
      first_name: null,
      last_name: '',
      email: '',
      phone_number: null,
      avanza: null,
      nordnet: null,
      avatar: '',
      ssn: '',
    },
  })

  const onSubmitHanlder: SubmitHandler<User> = async formData => {
    if (
      (!formData?.avanza && !formData?.nordnet) ||
      (formData?.avanza?.length && formData?.nordnet?.length)
    ) {
      setError('avanza', {
        message: 'Endast ett av fälten kan fyllas i.',
      })
      setError('nordnet', {
        message: 'Endast ett av fälten kan fyllas i.',
      })
    } else {
      try {
        const { data } = await userUpdate(formData)
        dispatch(userUpdateResponse({ user: data.data, errorMessage: null }))
      } catch {}
    }
  }

  const handlerFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value.length > 20) {
      setError('first_name', {
        message: 'Inte mer 20 siffror',
      })
    } else {
      setError('first_name', {
        message: '',
      })
    }
    if (value[0] !== undefined) {
      setValue('first_name', value[0].toUpperCase() + value.substring(1))
    }
  }

  const handlerLastName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value.length > 20) {
      setError('last_name', {
        message: 'Inte mer 20 siffror',
      })
    } else {
      setError('last_name', {
        message: '',
      })
    }
    if (value[0] !== undefined) {
      setValue('last_name', value[0].toUpperCase() + value.substring(1))
    }
  }

  const onClearSubmit = () => {
    setAddValues(user, setValue)
  }

  const handlerTelNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.replace(NUMBER_REG_EXP[1], '')


    setValue('phone_number', formatTelNumber(text))
  }

  const handlerPersonNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value.replace(NUMBER_REG_EXP[1], '')

    setValue('ssn', formatPersonNumber(text))
  }

  const handlerOnlyNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as 'avanza'
    const text = e.target.value.replace('#', '')
    const withIcon =
      (name === 'avanza' || name === 'nordnet') && !(e.target.value === '')
        ? '#'
        : ''

    setError(name, {
      message: !parseInt(text[text.length - 1])
        ? 'Endast siffror är tillåtna'
        : '',
    })

    setValue(name, withIcon + text.replace(NUMBER_REG_EXP[1], ''))
  }

  const toggleExample = () => {
    setIsOpenExample(prev => !prev)
  }

  useEffect(() => {
    setAddValues(user, setValue)
  }, [user?.name])

  return (
    <>
      {user && (
        <form className={s.form} onSubmit={handleSubmit(onSubmitHanlder)}>
          <div className={s.wrapperField}>
            {mock_user_fields.short.map((item, key) => (
              <div className={s.field} key={key}>
                <label className={s.labelField} htmlFor={item.name}>
                  {item.label}

                  <span className={s.requiredField}>*</span>
                </label>

                <div className={s.textField}>
                  <Controller
                    name={item.name as 'first_name'}
                    control={control}
                    rules={{
                      required: item.type !== 'phone' ? `${item.label} krävs` : item.name === 'ssn' ? 'Kräver 12 siffror' : 'Kräver 10 siffror',
                      minLength: (item.name === 'ssn') ? 12 : (item.name === 'phone_number') ? 13 : undefined,
                      pattern:
                        (item.name as 'email') === 'email'
                          ? EMAIL_VALIDATION_REG
                          : undefined,
                      onChange:
                        (item.name as 'phone_number') === 'phone_number'
                          ? handlerTelNumber
                          : (item.name as 'security_number') ===
                            'security_number'
                          ? handlerOnlyNumber
                          : (item.name as 'ssn') ===
                            'ssn'
                          ? handlerPersonNumber
                          : item.name === 'first_name'
                          ? handlerFirstName
                          : (item.name as 'last_name') === 'last_name'
                          ? handlerLastName
                          : undefined,
                    }}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        type={item.type}
                        value={value}
                        onChange={onChange}
                        placeholder={item.placeholder}
                      />
                    )}
                  />
                </div>

                {errors[item.name as 'email'] && (
                  <span className={s.errMessage}>
                    {errors[item.name as 'email']?.message}
                  </span>
                )}
                {errors[item.name as 'phone_number'] && errors[item.name as 'phone_number']!.type === 'minLength' && (
                  <span className={s.errMessage}>
                    {item.name === 'phone_number' ? 'Kräver 10 siffror' : ''}
                    {item.name === 'ssn' ? 'Kräver 12 siffror' : ''}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className={s.depository}>Depånummer (AF-kontonr) * Observera att du måste fylla i ett fullständiga Aktie&fondkontonr hos Avanza eller Nordnet för att kunna delta i BörsJakten`s aktietävling och för att bli tilldelad kostnadsfria aktier i Investmentbolaget Nosium efter avslutad tävling.</div>

          <div className={s.wrapperFlexField}>
            {mock_user_fields.flex.map((item, key) => (
              <div className={s.flexField} key={key}>
                <label htmlFor={item.name} className={s.labelField}>
                  {item.label}
                </label>

                <div>
                  <Controller
                    name={item.name as 'avanza'}
                    control={control}
                    rules={{
                      required: item.isRequired ? `${item.label} krävs` : false,
                      onChange: handlerOnlyNumber,
                    }}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        type={item.type}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                </div>

                {errors[item.name as 'avanza'] && (
                  <span className={s.errMessage}>
                    {errors[item.name as 'avanza']?.message}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className={s.visaExample}>
            <div className={s.example} style={{opacity: isOpenExample ? '1' : '0'}}>
              <div className={s.exampleImg}>
              </div>
            </div>
            <div onClick={toggleExample} className={s.visa} style={{color: isOpenExample ? 'red' : '#0a39b1'}}>
              visa will exempel
            </div>
          </div>
          

          <div className={s.btnsAction}>
            <Button className={s.actionBtn} type='submit'>
              {app.loading ? <Loading /> : 'Spara ändringar'}
            </Button>

            <Button
              onClick={onClearSubmit}
              className={cn(s.actionBtn, s.btnCancel)}
              type='button'
            >
              Avbryt ändringar
            </Button>
          </div>
        </form>
      )}
    </>
  )
}
