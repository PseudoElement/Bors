import { FC, useEffect } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { AxiosError } from 'axios'

import { Balance, Button, Input } from 'components'

import { useAppDispatch } from 'shared/hooks/redux'
import { authMe, userUpdate } from 'shared/api/routes/user'
import { userMeResponse, userUpdateResponse } from 'store/slices/userSlice'

import { User } from 'shared/types/user'
import {
  mock_user_balance,
  mock_user_fields,
  mock_user_icons,
} from 'shared/mocks/mock_userAccount'

import s from './UserAccount.module.scss'

export const UserAccount: FC = () => {
  const dispatch = useAppDispatch()

  const getUser = async () => {
    try {
      const data = await authMe()

      dispatch(userMeResponse(data.data))
    } catch (error) {
      console.error(error)
    }
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>({
    defaultValues: {
      name: '',
      first_name: null,
      last_name: '',
      email: '',
      phone_number: null,
      home_address: '',
      avanza: null,
      nordnet: null,
    },
  })

  const onSubmitHanlder: SubmitHandler<User> = async formData => {
    try {
      const { data } = await userUpdate(formData)
      dispatch(userUpdateResponse({ user: data.data, errorMessage: null }))
    } catch (error) {
      dispatch(
        userUpdateResponse({
          user: null,
          errorMessage: (error as AxiosError).message,
        })
      )
    }
  }

  useEffect(() => {
    getUser()
  }, [dispatch])

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.wrapperAvatar}>
          <div className={s.avatar}>
            <Image
              width={159}
              height={159}
              src={mock_user_icons.avatar}
              alt='avatar'
            />
          </div>
          <div className={s.changeAvatar}>
            <label htmlFor='file-upload' className={s.labelUpload}>
              <div className={s.iconUpload}>
                <Image
                  src={mock_user_icons.camera}
                  width={30}
                  height={25}
                  alt='user image'
                />
              </div>
              <input
                type='file'
                name='file-upload'
                id='file-upload'
                className={s.inputUpload}
              />
              <div className={s.textUpload}>Change</div>
            </label>
          </div>
        </div>
        <div className={s.wrapperBalance}>
          {mock_user_balance.map((item, key) => (
            <Balance {...item} key={key} />
          ))}
        </div>
      </div>
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
                  rules={{ required: `${item.label} field required` }}
                  render={({ field: { onChange, value } }) => (
                    <Input type={item.type} value={value} onChange={onChange} />
                  )}
                />
              </div>

              {errors[item.name as 'email'] && (
                <span className={s.errMessage}>
                  {errors[item.name as 'email']?.message}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className={s.wrapperFullField}>
          <label htmlFor='homeadress' className={s.labelField}>
            Home Adress<span className={s.requiredField}>*</span>
          </label>

          <div>
            <Controller
              name='home_address'
              control={control}
              rules={{ required: `Home Adress field required` }}
              render={({ field: { onChange, value } }) => (
                <Input type='text' value={value} onChange={onChange} />
              )}
            />
          </div>
          {errors.home_address && (
            <span className={s.errMessage}>{errors.home_address.message}</span>
          )}
        </div>
        <div className={s.wrapperFlexField}>
          {mock_user_fields.flex.map((item, key) => (
            <div className={s.flexField} key={key}>
              <label htmlFor={item.name} className={s.labelField}>
                {item.label}
                <span className={s.requiredField}>*</span>
              </label>
              <div>
                <Controller
                  name={item.name as 'avanza'}
                  control={control}
                  rules={{ required: `${item.label} field required` }}
                  render={({ field: { onChange, value } }) => (
                    <Input type={item.type} value={value} onChange={onChange} />
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
        <div className={s.btnsAction}>
          <Button className={s.actionBtn} type='submit'>
            Save changes
          </Button>
          <Button className={cn(s.actionBtn, s.btnCancel)} type='button'>
            Сancel changes
          </Button>
        </div>
      </form>
    </div>
  )
}
