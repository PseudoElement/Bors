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
  defActiveTab?: 'login' | 'reg'
  openPopup: () => void
  isOpen: boolean
  onClose: () => void
  setIsOpenPasswordRecovery: Dispatch<SetStateAction<boolean>>
}

export const LoginRegistrationModal: FC<LoginRegistrationModalProps> = ({
  defActiveTab = 'login',
  onClose,
  isOpen,
  setIsOpenPasswordRecovery,
  openPopup,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<'login' | 'reg'>('login')

  useClickOutside(overlayRef, onClose)

  useEffect(() => {
    if (defActiveTab) {
      setActiveTab(defActiveTab)
    }
  }, [defActiveTab])

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
            onClick={() => setActiveTab!('login')}
            className={activeTab === 'login' ? s.activeTitle : ''}
          >
            Logga In
          </span>{' '}
          <span
            onClick={() => setActiveTab('reg')}
            className={activeTab === 'reg' ? s.activeTitle : ''}
          >
            / Registera
          </span>
        </div>

        {activeTab === 'login' ? (
          <LoginForm
            setIsOpenPasswordRecovery={setIsOpenPasswordRecovery}
            onClose={onClose}
          />
        ) : (
          <RegistrationForm openPopup={openPopup} />
        )}
      </div>
    </div>
  )
}
