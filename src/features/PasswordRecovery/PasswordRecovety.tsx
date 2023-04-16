import { useState } from 'react'

import Link from 'next/link'

import { Button, Input } from 'components'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'

import cn from 'classnames'
import s from './passwordRecovery.module.scss'

interface PasswordRecoveryFormProps {
  email: string
}

export const PasswordRecovery = () => {
  const [sendModal, setSendModal] = useState<boolean>(false)
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<PasswordRecoveryFormProps>({
    defaultValues: {
      email: '',
    },
  })

  const onSubmit: SubmitHandler<PasswordRecoveryFormProps> = defaultValues => {
    console.log(defaultValues.email) //TODO send a request email
    setSendModal(true)
  }
  return (
    <div className={s.wrapper}>
      <div className={s.titleInfo}>
        <div className={s.title}>Återställning av lösenord</div>
        <div className={cn(s.subtitle, { [s.subtitleEmail]: sendModal })}>
          {sendModal ? (
            <Controller
              name='email'
              control={control}
              render={({ field: { value } }) => (
                <span>
                  Ett mail har sänts till  &nbsp;
                  <span className={s.email}>{value}</span>
                  &nbsp; med en länk för att återställa ditt lösenord. Om du inte har fått ett e-post inom 5 minuter, se gärna över din skräppost.
                </span>
              )}
            />
          ) : (
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
          )}
        </div>
      </div>
      {sendModal ? (
        <Button>
          <Link href={'/'}>Till huvudsidan</Link>
        </Button>
      ) : (
        <form className={s.form}>
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
            <Button onClick={handleSubmit(onSubmit)}>Återställ lösenordet</Button>
          </div>
        </form>
      )}
    </div>
  )
}
