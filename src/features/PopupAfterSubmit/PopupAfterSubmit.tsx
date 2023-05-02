import { Popup } from 'components'
import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import Check from '../../../public/assets/image/CheckInCircle.png'
import Error from '../../../public/assets/image/Error.png'
import s from './PopupAfterSubmit.module.scss'
import { PopupAfterSubmitStatus } from 'shared/enums'
import { useRouter } from 'next/router'

interface PopupAfterSubmitProps {
  type: 'sendEmail' | 'registration'
  onClose: () => void
  status: PopupAfterSubmitStatus
}

export const PopupAfterSubmit: FC<PopupAfterSubmitProps> = ({
  onClose,
  status,
  type,
}) => {
  const router = useRouter()
  const [buttonText, setButtonText] = useState<string>('')

  const handleSubmit = () => {
    onClose()
    type === 'registration' && router.push('/profile/account')
  }

  useEffect(() => {
    setButtonText(type === 'registration' ? 'Börja' : 'Zaebis')
  }, [])

  return (
    <Popup
      isOpen={Boolean(status)}
      onClose={onClose}
      buttonText={buttonText}
      onSubmit={handleSubmit}
    >
      {type === 'registration' && (
        <div className={s.contentWrapper}>
          <Image
            className={s.image}
            src={Check}
            width={100}
            height={100}
            alt='Success'
          />
          <div className={s.popupTitle}>
            Tack för din registrering! <br/>Nu återstår ett sista steg, Bekräfta din
            e-postadress för <br/>att påbörja ditt deltagande i Börsjakten!
          </div>
          <div className={s.popupText}>
            Tänk på att kolla skräpposten om du inte har fått bekräftelsemejlet.
            Lycka till!
          </div>
        </div>
      )}
      {type === 'sendEmail' && status === PopupAfterSubmitStatus.SUCCESS && (
        <div className={s.contentWrapper}>
          <Image
            className={s.image}
            src={Check}
            width={100}
            height={100}
            alt='Success'
          />
          <div className={s.popupTitle}>Tack!</div>
          <div className={s.popupText}>
            Din ansökan har skickats med framgång.
          </div>
        </div>
      )}
      {type === 'sendEmail' && status === PopupAfterSubmitStatus.ERROR && (
        <div className={s.contentWrapper}>
          <Image
            className={s.image}
            src={Error}
            width={100}
            height={100}
            alt='Error'
          />
          <div className={s.popupTitle}>Upprepa en gång till!</div>
          <div className={s.popupText}>
            Tyvärr har din begäran om auktorisering avbrutits, något gick fel.
          </div>
        </div>
      )}
    </Popup>
  )
}
