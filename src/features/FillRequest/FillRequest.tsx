import Image from 'next/image'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'

import { Button, Input } from 'components'

import { EMAIL_VALIDATION_REG } from 'shared/constants/regExp'
import image from '/public/assets/image/fillRequest.png'

import s from './fillRequest.module.scss'

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

  const onSubmit: SubmitHandler<EmailRecoveryFormProps> = defaultValues => {
    console.log(defaultValues.email)
  }

  return (
    <div className={s.fillrequest} id={'contacts'}>
      <div className={s.fillrequestWrapper}>
        <form className={s.fillrequestAuth}>
          <h3 className={s.fillrequestTitle}>
            Fyll i din e-postadress för att få del av framtida aktietävlingar
          </h3>

          <Controller
            name='email'
            control={control}
            rules={{
              pattern: EMAIL_VALIDATION_REG,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder={'Din E-post'}
                classname={s.fillrequestInput}
                value={value}
                classNameBtn={s.fillrequestInpuBtn}
                onChange={onChange}
                onClick={handleSubmit(onSubmit)}
                type='email'
                withButton='Sänd'
              />
            )}
          />

          <Button className={s.fillrequestBtn}>Send</Button>

          <span className={s.fillrequestInfo}>
            Genom att klicka på “Sänd” godkänner du behandlingen av dina personuppgifter
          </span>
        </form>

        <div className={s.fillrequestImage}>
          <Image width={482} height={482} src={image} alt='Fill Request' />
        </div>
      </div>
    </div>
  )
}
