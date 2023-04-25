import { FC, useState } from 'react'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'
import cn from 'classnames'

import { Button, Input, Popup } from 'components'

import { userRecoverPassword } from 'shared/api/routes/user'

import s from './passwordRecovery.module.scss'

interface PasswordRecoveryFormProps {
  email: string
}

interface PasswordRecoveryProps {
  setIsOpenPasswordRecovery: () => void
  isOpenPasswordRecovery: boolean
}
export const PasswordRecovery: FC<PasswordRecoveryProps> = ({
  setIsOpenPasswordRecovery,
  isOpenPasswordRecovery,
}) => {
  const [isOpenSuccess, setIsOpenSuccess] = useState<boolean>(false)

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<PasswordRecoveryFormProps>({
    defaultValues: {
      email: '',
    },
  })

  const onSubmit: SubmitHandler<PasswordRecoveryFormProps> = data => {
    recoverPassword(data)
  }

  const recoverPassword = async (data: PasswordRecoveryFormProps) => {
    const { email } = data
    try {
      const response = await userRecoverPassword(email)
      if (response) {
        setIsOpenSuccess(true)
      }
    } catch (error) {
      console.error('error from recoverPassword ', error)
    }
  }

  const handleClose = () => {
    setIsOpenPasswordRecovery()
    setIsOpenSuccess(false)
    reset()
  }

  return (
    <Popup
      isOpen={isOpenPasswordRecovery}
      withButton={false}
      onClose={handleClose}
    >
      <div className={s.wrapper}>
        <div className={s.titleInfo}>
          <div className={s.title}>Återställning av lösenord</div>
          <div className={cn(s.subtitle, { [s.subtitleEmail]: isOpenSuccess })}>
            {isOpenSuccess ? (
              <Controller
                name='email'
                control={control}
                render={({ field: { value } }) => (
                  <span>
                    Ett mail har sänts till &nbsp;
                    <span className={s.email}>{value}</span>
                    &nbsp; med en länk för att återställa ditt lösenord. Om du
                    inte har fått ett e-post inom 5 minuter, se gärna över din
                    skräppost.
                  </span>
                )}
              />
            ) : (
              'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
            )}
          </div>
        </div>
        {isOpenSuccess ? (
          <Button onClick={handleClose}>Till huvudsidans</Button>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <Controller
              name='email'
              control={control}
              render={({ field: { onChange, value } }) => (
                <Input
                  {...register('email', {
                    required: true,
                    minLength: { value: 8, message: 'error' },
                  })}
                  placeholder={'Skriv in e-mail'}
                  value={value}
                  onChange={onChange}
                  type='email'
                />
              )}
            />
            <div className={s.resetBtn}>
              <Button className={s.button} type='submit'>
                Återställ lösenordet
              </Button>
            </div>
          </form>
        )}
      </div>
    </Popup>
  )
}
