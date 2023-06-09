import Image from 'next/image'
import { SubmitHandler, useForm, Controller } from 'react-hook-form'

import { Input, Loading } from 'components'

import { sendEmail } from 'shared/api/routes/main'
import { Dispatch, FC, SetStateAction } from 'react'
import { PopupAfterSubmitStatus } from 'shared/enums'
import { useAppSelector } from 'shared/hooks/redux'

import { EMAIL_VALIDATION_REG } from 'shared/constants/regExp'
import image from '/public/assets/image/fillRequest.png'

import s from './fillRequest.module.scss'

type EmailRecoveryFormProps = { email: string }
interface FillRequestProps {
  setPopupStatus: Dispatch<SetStateAction<PopupAfterSubmitStatus>>
}

export const FillRequest: FC<FillRequestProps> = ({ setPopupStatus }) => {
  const app = useAppSelector(state => state.app)
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
    } catch (e) {}
  }

  return (
    <div className={s.fillRequestSection}>
      <div className={s.fillRequestCard}>
        <div className={s.image}>
          <Image layout='fill' src={image} alt='Fill request star' />
        </div>

        <form className={s.forms} id={'contacts'}>
          <div className={s.shadow} />

          <h3 className={s.title}>Följ Börsjakten och anmäl dig till vårt nyhetsbrev</h3>

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
                onChange={onChange}
                onClick={handleSubmit(onSubmit)}
                type='email'
                classNameBtn={s.inputButton}
                withButton={app.loading ? <Loading /> : 'Skicka'}
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
