import { FC, useEffect } from 'react'
import Image from 'next/image'
import cn from 'classnames'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { AxiosError } from 'axios'

import { Balance, Button, Input } from 'components'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { authMe, userUpdate } from 'shared/api/routes/user'
import { userMeResponse, userUpdateResponse, newUserRequested } from 'store/slices/userSlice'

import { User } from 'shared/types/user'
import { setAddValues } from 'shared/helpers/setAddValues'
import {
  mock_user_balance,
  mock_user_fields,
  mock_user_icons,
} from 'shared/mocks/mock_userAccount'

import AvatarImage from '/public/assets/image/avatar.png'

import s from './UserAccount.module.scss'

export const UserAccount: FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user.user)

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
    setValue,
    formState: { errors },
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
      avatar: ''
    },
  })

  useEffect(() => {
    setAddValues(user, setValue)
  }, [user])

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

  const onClearSubmit = () => {
    setAddValues(user, setValue)
  }

  useEffect(() => {
    getUser()
  }, [dispatch])

  return (
    <div className={s.wrapper}>
      {user && <div className={s.header}>
        <div className={s.wrapperAvatar}>
          <div className={s.avatar}>
            <Image
              width={159}
              height={159}
              src={!user?.avatar ? AvatarImage : user?.avatar as string}
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
            <Balance key={key} count={user?.balance} currency={item.currency} title={item.title} />
          ))}
        </div>
      </div>}
      {user && <form className={s.form} onSubmit={handleSubmit(onSubmitHanlder)}>
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
                    <Input
                      type={item.type}
                      value={value}
                      onChange={onChange}
                    />
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
          <Button onClick={onClearSubmit} className={cn(s.actionBtn, s.btnCancel)} type='button'>
            Сancel changes
          </Button>
        </div>
      </form>}
    </div>
  )
}