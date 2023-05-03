import {
  FC,
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from 'react'

import { LoginForm, RegistrationForm } from 'components'

import { useClickOutside } from 'shared/hooks/useClickOutside'

import s from './loginRegistrationModal.module.scss'

interface LoginRegistrationModalProps {
  isActiveDialog?: string | null;
  setIsActiveDialog?: (isActiveDialog?: string | null) => void;
  openPopup: () => void
  isOpen: boolean
  onClose: () => void
  setIsOpenPasswordRecovery: Dispatch<SetStateAction<boolean>>
}

export const LoginRegistrationModal: FC<LoginRegistrationModalProps> = ({
  onClose,
  isActiveDialog,
  setIsActiveDialog,
  isOpen,
  setIsOpenPasswordRecovery,
  openPopup,
}) => {
  const isActive = 'login'
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
    <div
      onClick={onClose}
      className={s.popupOverlay}
      ref={!isOpen ? overlayRef : null}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={s.modal}
        ref={isOpen ? overlayRef : null}
      >
        <div className={s.title}>
          <span
            onClick={() => setIsActiveDialog!('login')}
            className={isActiveDialog === 'login' ? s.activeTitle : ''}
          >
            Logga In
          </span>{' '}
          <span
            onClick={() => setIsActiveDialog!('registration')}
            className={isActiveDialog === 'registration' ? s.activeTitle : ''}
          >
            / Registera
          </span>
        </div>

        {isActive === isActiveDialog ? (
          <LoginForm
            setIsOpenPasswordRecovery={setIsOpenPasswordRecovery}
            onClose={onClose}
          />
        ) : <RegistrationForm openPopup={openPopup} />}
      </div>
    </div>
  )
}
