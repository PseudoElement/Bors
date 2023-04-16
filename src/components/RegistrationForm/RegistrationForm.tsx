import { FC } from 'react'
import Link from 'next/link'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'

import { Input, Button } from 'components'

import { cookies } from 'shared/utils/Cookies'
import { UserRegRequest } from 'shared/types/user'
import { useAppDispatch } from 'shared/hooks/redux'
import { userRegister } from 'shared/api/routes/user'
import { newUserRequested } from 'store/slices/userSlice'

import s from './registrationForm.module.scss'

export const RegistrationForm: FC = () => {
  const dispatch = useAppDispatch()

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm<UserRegRequest>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
    },
  })

  const registerUser = async (user: UserRegRequest) => {
    try {
      const { data } = await userRegister(user)
      const userData = {
        user: data.data.user,
        authStatus: data.status,
        token: data.data.access_token,
        authError: null,
      }
      await cookies.set('token', data.data.access_token)
      await dispatch(newUserRequested(userData))
      await reset()
    } catch (error) {
      console.error(error)
      const errorData = {
        user: null,
        authStatus: null,
        token: null,
        authError: 'registration error'
      }
      dispatch(newUserRequested(errorData))
    }
  }

  const onSubmitRegistration: SubmitHandler<UserRegRequest> = data => {
    registerUser(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitRegistration)} className={s.form}>
      <label className={s.label}>
        <span className={s.labelText}>Användarnamn</span>
        <Controller
          name='name'
          control={control}
          rules={{ required: 'name is required' }}
          render={({ field: { onChange, value } }) => (
            <Input value={value!} onChange={onChange} />
          )}
        />
        {errors.name && (
          <div className={s.errorMessage}>{errors.name.message}</div>
        )}
      </label>
      <label className={s.label}>
        <span className={s.labelText}>E-post</span>
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
        <span className={s.labelText}>Lösenord</span>
        <Controller
          name='password'
          control={control}
          rules={{ required: 'password is required', minLength: 6 }}
          render={({ field: { onChange, value } }) => (
            <Input withIcon={true} value={value} onChange={onChange} />
          )}
        />
        {errors.password && (
          <div className={s.errorMessage}>{errors.password.message}</div>
        )}
      </label>

      <label className={s.label}>
        <span className={s.labelText}>Bekräfta lösenord</span>
        <Controller
          name='confirm_password'
          control={control}
          rules={{
            required: 'password confirmation is required',
            minLength: 6,
            validate: (value: string, data: UserRegRequest) =>
              value === data.password || "Passwords doesn't match",
          }}
          render={({ field: { onChange, value } }) => (
            <Input withIcon={true} value={value!} onChange={onChange} />
          )}
        />
        {errors.confirm_password && (
          <div className={s.errorMessage}>
            {errors.confirm_password.message}
          </div>
        )}
        {errors.confirm_password
          ? ''
          : getValues('password') !== getValues('confirm_password') && (
              <div className={s.errorMessage}>password mismatch</div>
            )}
      </label>
      <Button type='submit' className={s.submitBtn}>
      Registrera dig 
      </Button>

      <p className={s.agreeInfo}>
        By clicking the &quot;Register&quot; button, I consent to the collection
        and processing of my personal data in accordance with the{' '}
        <Link href={'#'}>
          <a className={s.link}>Policy</a>
        </Link>{' '}
        and accept the terms of the{' '}
        <Link href={'#'}>
          <a className={s.link}>User Agreement</a>
        </Link>
      </p>
    </form>
  )
}
