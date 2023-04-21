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
    setOpen(false)
    dispatch(setAppError(''))
    dispatch(setAppSuccess(''))
  }

  return (
    <div
      className={cn(s.notify, isOpen ? s.active : '')}
      onClick={handlerCloseNotify}
    >
      {isOpen && (
        <div className={s.wrapper}>
          {errorMessage && (
            <Image src='/assets/image/Error.png' width={30} height={30} />
          )}
          {successMessage && (
            <Image
              src='/assets/image/CheckInCircle.png'
              width={30}
              height={30}
            />
          )}
          <p style={{ color: errorMessage ? 'red' : 'green' }}>
            {errorMessage || successMessage}
          </p>
        </div>
      )}
    </div>
  )
}
