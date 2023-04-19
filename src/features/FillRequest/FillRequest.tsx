import Image from 'next/image'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'

import { Input } from 'components'

import { EMAIL_VALIDATION_REG } from 'shared/constants/regExp'
import image from '/public/assets/image/fillRequest.png'

import s from './fillRequest.module.scss'
import { sendEmail } from 'shared/api/routes/main'

type EmailRecoveryFormProps = { email: string }

export const FillRequest = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailRecoveryFormProps>({
    defaultValues: {
      email: '',
    },
  })

  const onSubmit: SubmitHandler<
    EmailRecoveryFormProps
  > = async defaultValues => {
    try {
      await sendEmail(defaultValues.email)
    } catch (e) {
      console.error(e)
      alert((e as Error).message)
    }
  }

  return (
    <div className={s.fillRequestSection}>
      <div className={s.fillRequestCard}>
        <div className={s.image}>
          <Image layout='fill' src={image} alt='Fill request star' />
        </div>

        <form className={s.forms} id={'contacts'}>
          <div className={s.shadow} />

          <h3 className={s.title}>Fyll i en ansökan om auktorisation</h3>

          <Controller
            name='email'
            control={control}
            rules={{
              pattern: EMAIL_VALIDATION_REG,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder={'Din e-post'}
                classname={s.input}
                value={value}
                classNameBtn={s.fillrequestInpuBtn}
                onChange={onChange}
                onClick={handleSubmit(onSubmit)}
                type='email'
                withButton='Skicka'
              />
            )}
          />

          <div className={s.info}>
            Genom att klicka på knappen godkänner du behandlingen av
            personuppgifter
          </div>
        </form>
      </div>
    </div>
  )
}
