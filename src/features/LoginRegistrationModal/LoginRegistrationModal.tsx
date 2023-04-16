import { FC, useState, useEffect, useRef } from 'react'

import { LoginForm, RegistrationForm } from 'components'

import { useClickOutside } from 'shared/hooks/useClickOutside'

import s from './loginRegistrationModal.module.scss'

interface LoginRegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoginRegistrationModal: FC<LoginRegistrationModalProps> = ({
  onClose,
  isOpen,
}) => {
  const [isActive, setIsActive] = useState<string>('login')
  const overlayRef = useRef<HTMLDivElement>(null)

  useClickOutside(overlayRef, onClose)

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'inherit'
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return (
    <div className={s.popupOverlay} ref={!isOpen ? overlayRef : null}>
      <div
        onClick={e => e.stopPropagation()}
        className={s.modal}
        ref={isOpen ? overlayRef : null}
      >
        <div className={s.title}>
          <span
            onClick={() => setIsActive('login')}
            className={isActive === 'login' ? s.activeTitle : ''}
          >
            Logga In
          </span>{' '}
          <span
            onClick={() => setIsActive('registration')}
            className={isActive === 'registration' ? s.activeTitle : ''}
          >
            / Registrering
          </span>
        </div>
        {isActive === 'login' ? <LoginForm onClose={onClose}/> : <RegistrationForm />}
      </div>
    </div>
  )
}
