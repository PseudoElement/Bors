import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { BalancePanel } from 'features'

import { useAppSelector } from 'shared/hooks/redux'

import { User } from 'shared/types/user'
import { setAddValues } from 'shared/helpers/setAddValues'
import PhotoCamera from '/public/assets/icons/Camera.svg'

import s from './UserAccountHeader.module.scss'

interface UserAccountHeaderProps {
  changeAvatar: (avatar: File) => void
}
export const UserAccountHeader: FC<UserAccountHeaderProps> = ({
  changeAvatar,
}) => {
  const user = useAppSelector(state => state.user.user)

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

  return (
    <div className={s.header}>
      <div className={s.wrapperAvatar}>
        <div className={s.avatar}>
          {user?.avatar ? (
            <div
              className={s.userAvatar}
              style={{ backgroundImage: `url("${user.avatar}")` }}
            />
          ) : (
            <div className={s.defaultAvatar} />
          )}
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

      <BalancePanel />
    </div>
  )
}
