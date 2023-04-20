import { FC, useEffect } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

import { Balance } from 'components'

import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { authMe, userAvatar } from 'shared/api/routes/user'
import { userMeResponse } from 'store/slices/userSlice'

import { User } from 'shared/types/user'
import { setAddValues } from 'shared/helpers/setAddValues'
import defaultAvatarImage from '/public/assets/image/avatar.png'
import PhotoCamera from '/public/assets/icons/Camera.svg'

import s from './UserAccountHeader.module.scss'

export const UserAccountHeader: FC = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(
    (state: { user: { user: any } }) => state.user.user
  )

  const changeAvatar = async (avatar: File) => {
    try {
      await userAvatar(avatar)
      await getUser()
    } catch (error) {
      console.error('error from changeAvatar ', error)
    }
  }

  const getUser = async () => {
    try {
      const data = await authMe()
      dispatch(userMeResponse(data.data))
    } catch (error) {
      console.error(error)
    }
  }

  const { setValue, setError } = useForm<User>({
    defaultValues: {
      name: '',
      first_name: null,
      last_name: '',
      email: '',
      phone_number: null,
      home_address: '',
      avanza: null,
      nordnet: null,
      avatar: '',
    },
  })

  useEffect(() => {
    setAddValues(user, setValue)
  }, [user?.name])

  useEffect(() => {
    getUser()
  }, [dispatch])

  return (
    <>
      {user && (
        <div className={s.header}>
          <div className={s.wrapperAvatar}>
            <div className={s.avatar}>
              <Image
                width={159}
                height={159}
                src={user?.avatar ? user.avatar : defaultAvatarImage}
                alt='avatar'
              />
            </div>

            <div className={s.changeAvatar}>
              <label htmlFor='file-upload' className={s.labelUpload}>
                <div className={s.iconUpload}>
                  <PhotoCamera />
                </div>

                <input
                  type='file'
                  name='file-upload'
                  id='file-upload'
                  className={s.inputUpload}
                  onChange={e => {
                    if (e.target.files) changeAvatar(e.target.files[0])
                  }}
                />
                <div className={s.textUpload}>Förändra</div>
              </label>
            </div>
          </div>

          <div className={s.wrapperBalance}>
            <Balance count={user?.balance} currency={'SEK'} title={'Saldo'} />

            <Balance
              count={user?.balance}
              currency={'SEK'}
              title={'Avkastning'}
            />

            <Balance
              count={user?.balance}
              currency={'bbb'}
              title={'Rangordning'}
            />
          </div>
        </div>
      )}
    </>
  )
}
