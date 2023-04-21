import { useEffect, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { setAppError, setAppSuccess } from 'store/slices/appSlice'

import s from './Notify.module.scss'

export const Notify: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const { errorMessage, successMessage } = useAppSelector(state => state.app)

  useEffect(() => {
    errorMessage || successMessage ? setOpen(true) : setOpen(false)

    const timeout = setTimeout(() => handlerCloseNotify(), 5000)

    return () => clearTimeout(timeout)
  }, [errorMessage, successMessage])

  const handlerCloseNotify = () => {
    dispatch(setAppError(''))
    dispatch(setAppSuccess(''))
    setOpen(false)
  }

  return (
    <div className={cn(s.notify, isOpen ? s.active : '')}>
      {isOpen && (
        <div className={s.wrapper}>
          <Image
            src={`/assets/image/${
              (errorMessage && 'Error') || (successMessage && 'CheckInCircle')
            }.png`}
            width={30}
            height={30}
          />
          <p style={{ color: errorMessage ? 'red' : 'green' }}>
            {errorMessage || successMessage}
          </p>
        </div>
      )}
      <div className={s.closeIcon} onClick={handlerCloseNotify}>
        <Image src='/assets/icons/CloseIconBlack.svg' width={15} height={15} />
      </div>
    </div>
  )
}
