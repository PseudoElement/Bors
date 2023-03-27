import { FC, useState, useEffect } from 'react'

import { LoginForm, RegistrationForm } from 'components'

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
        <div onClick={e => e.stopPropagation()} className={s.modal}>
            <div className={s.title}>
                <span
                    onClick={() => setIsActive('login')}
                    className={isActive === 'login' ? s.activeTitle : ''}
                >
                    Login
                </span>{' '}
                <span
                    onClick={() => setIsActive('registration')}
                    className={isActive === 'registration' ? s.activeTitle : ''}
                >
                    / Registration
                </span>
            </div>
            {
                isActive === 'login' ? <LoginForm /> : <RegistrationForm />
            }
        </div>
    )
}
