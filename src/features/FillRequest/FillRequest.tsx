import Image from 'next/image'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'

import { Input } from 'components'

import { EMAIL_VALIDATION_REG } from 'shared/constants/regExp'
import { sendEmail } from 'shared/api/routes/fillForm'
import image from '/public/assets/image/fillRequest.png'

import s from './fillRequest.module.scss'

type EmailRecoveryFormProps = { email: string }

export const FillRequest = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailRecoveryFormProps>({
    defaultValues: {
      email: '',
    },
  })

  const onSubmitHandler: SubmitHandler<
    EmailRecoveryFormProps
  > = async defaultValues => {
    try {
      await sendEmail(defaultValues)
    } catch (error) {
      console.error(error)
    }
  }

  return (

    <div className={s.fillrequest} id={'contacts'}>
      <div className={s.fillrequestWrapper}>
        <form className={s.fillrequestAuth}>
          <h3 className={s.fillrequestTitle}>
            Fyll i din e-postadress för att få del av framtida aktietävlingar

    <section className={s.fillRequestSection}>
      <div className={s.fillRequestCard} id={'contacts'}>
        <div className={s.image}>
          <Image layout={'fill'} src={image} alt='Fill Request' />
        </div>

        <form className={s.forms} onSubmit={handleSubmit(onSubmitHandler)}>
          <div className={s.shadow} />
          
          <h3 className={s.title}>
            Fyll i din e-postadress för att få del <br /> av framtida
            aktietävlingar

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

                classname={s.input}

                value={value}
                onChange={onChange}
                type='email'
                withButton='Sänd'


                buttonType='submit'

              />
            )}
          />


          <Button className={s.fillrequestBtn}>Send</Button>

          <span className={s.fillrequestInfo}>
            Genom att klicka på “Sänd” godkänner du behandlingen av dina personuppgifter
          </span>

          <div className={s.info}>
            Genom att klicka på “Sänd” godkänner du behandlingen av dina
            personuppgifter
          </div>

        </form>
      </div>
    </section>
  )
}
