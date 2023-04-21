import { FC, ReactNode, useRef } from 'react'
import cn from 'classnames'

import { useClickOutside } from 'shared/hooks/useClickOutside'

import CloseIcon from '/public/assets/icons/CloseIcon.svg'

import s from './popup.module.scss'
import { Button } from '../index'

interface PopupProps {
  buttonText?: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  onSubmit?: () => void
  className?: string
  isClosable?: boolean
  contentClassName?: string
  wrapperClassName?: string
}

export const Popup: FC<PopupProps> = ({
  children,
  isOpen,
  isClosable = true,
  onClose,
  className,
  contentClassName,
  wrapperClassName,
  buttonText = 'Börja',
  onSubmit,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null)

  useClickOutside(overlayRef, !isClosable ? onClose : () => {})

  if (!isOpen) return null
  return (
    <div
      onClick={onClose}
      className={cn(s.popupOverlay, className)}
      ref={overlayRef}
    >
      <div
        onClick={e => e.stopPropagation()}
        className={cn(s.popupWrapper, wrapperClassName)}
      >
        <div
          className={cn(s.popupContent, contentClassName)}
          ref={isClosable ? overlayRef : null}
        >
          {isClosable && (
            <button onClick={onClose}>
              <CloseIcon className={s.popupClose} />
            </button>
          )}
          <div className={s.wrapperContent}>
            {children}
            <Button onClick={() => onSubmit?.()} className={s.popup_added_button}>{buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
