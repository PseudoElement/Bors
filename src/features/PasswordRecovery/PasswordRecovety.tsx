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
        <div className={s.title}>Password recovery</div>
        <div className={cn(s.subtitle, { [s.subtitleEmail]: sendModal })}>
          {sendModal ? (
            <Controller
              name='email'
              control={control}
              render={({ field: { value } }) => (
                <span>
                  An email has been sent to &nbsp;
                  <span className={s.email}>{value}</span>
                  &nbsp; with a link to reset your forgotten password. If you
                  haven&apos;t received an email within 5 minutes, please check
                  your spam folder or resubmit your recovery request.
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
          <Link href={'/'}>To the Main Page</Link>
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
                placeholder={'Enter e-mail'}
                value={value}
                onChange={onChange}
                type='email'
              />
            )}
          />
          <div className={s.resetBtn}>
            <Button onClick={handleSubmit(onSubmit)}>Reset the Password</Button>
          </div>
        </form>
      )}
    </div>
  )
}
