import { FC } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'

import { Input, Button } from 'components'

import { userAuth } from 'shared/api/routes/user'
import { userAuthResponse } from 'store/slices/userSlice'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { cookies } from 'shared/utils/Cookies'

import s from './loginForm.module.scss'

export interface FormInputProps {
  email: string
  password: string
}

interface LoginFormProps {
  onClose: () => void
}

export const LoginForm: FC<LoginFormProps> = ({ onClose }) => {
  const dispatch = useAppDispatch()
  const { push } = useRouter()
  const user = useAppSelector(state => state.user)
  console.log(user)
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputProps>({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmitLogin: SubmitHandler<FormInputProps> = async data => {
    const loginData = { email: data.email, password: data.password }

    try {
      const response = await userAuth(loginData)
      if (response.data.status !== 'error') {
        dispatch(userAuthResponse(response.data.data))
        cookies.set('token', response.data.data.access_token)
        await onClose()
        await push('profile/account')
      }
      reset({
        email: '',
        password: '',
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)} className={s.form}>
      <label className={s.label}>
        <span className={s.labelText}>E-mail</span>
        <Controller
          name='email'
          control={control}
          rules={{ required: 'email is required' }}
          render={({ field: { onChange, value } }) => (
            <Input type='email' value={value} onChange={onChange} />
          )}
        />
        {errors.email && (
          <div className={s.errorMessage}>{errors.email.message}</div>
        )}
      </label>

      <label className={s.label}>
        <div className={s.labelInner}>
          <span>Password</span>
          <span className={s.forgotPassword}>Forgot your password?</span>
        </div>
        <Controller
          name='password'
          control={control}
          rules={{ required: 'password is required' }}
          render={({ field: { onChange, value } }) => (
            <Input withIcon={true} value={value} onChange={onChange} />
          )}
        />
        {errors.password && (
          <div className={s.errorMessage}>{errors.password.message}</div>
        )}
      </label>

      <Button type='submit' className={s.submitBtn}>
        Enter
      </Button>
    </form>
  )
}
