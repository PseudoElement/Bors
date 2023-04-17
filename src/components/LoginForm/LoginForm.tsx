import { Dispatch, FC, SetStateAction } from 'react'
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
  setIsOpenPasswordRecovery: Dispatch<SetStateAction<boolean>>
}

export const LoginForm: FC<LoginFormProps> = ({
  onClose,
  setIsOpenPasswordRecovery,
}) => {
  const dispatch = useAppDispatch()
  const { push } = useRouter()
  const user = useAppSelector(state => state.user)

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

  const handleRecoveryPassword = () => {
    onClose()
    setIsOpenPasswordRecovery(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitLogin)} className={s.form}>
      <label className={s.label}>
        <span className={s.labelText}>E-post</span>
        <Controller
          name='email'
          control={control}
          rules={{ required: 'E-post krävs' }}
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
          <span>Lösenord</span>
          <span className={s.forgotPassword} onClick={handleRecoveryPassword}>
            Glömt ditt lösenord?
          </span>
        </div>
        <Controller
          name='password'
          control={control}
          rules={{ required: 'Lösenord krävs' }}
          render={({ field: { onChange, value } }) => (
            <Input withIcon={true} value={value} onChange={onChange} />
          )}
        />
        {errors.password && (
          <div className={s.errorMessage}>{errors.password.message}</div>
        )}
      </label>

      <Button type='submit' className={s.submitBtn}>
        Stiga på
      </Button>
    </form>
  )
}
