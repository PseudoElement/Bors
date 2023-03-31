import Image from 'next/image'

import { Balance, Button, Input } from 'components'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import {
  mock_user_balance,
  mock_user_fields,
  mock_user_icons,
} from 'shared/mocks/mock_userAccount'

import s from './UserAccount.module.scss'

interface UserFieldsProps {
  username: string
  firstname: string
  lastname: string
  email: string
  phone: string
  homeadress: string
  avanza: string
  nordnet: string
}

export const UserAccount: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFieldsProps>({
    defaultValues: {
      username: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      homeadress: '',
      avanza: '',
      nordnet: '',
    },
  })

  const onSubmitHanlder: SubmitHandler<UserFieldsProps> = data => {
    console.log(data)
    reset()
  }

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <div className={s.wrapperAvatar}>
          <div className={s.avatar}>
            <Image
              width={159}
              height={159}
              src={mock_user_icons.avatar}
              alt='avatar'
            />
          </div>
          <div className={s.changeAvatar}>
            <label htmlFor='file-upload' className={s.labelUpload}>
              <div className={s.iconUpload}>
                <Image src={mock_user_icons.camera} width={30} height={25} />
              </div>
              <input
                type='file'
                name='file-upload'
                id='file-upload'
                className={s.inputUpload}
              />
              <div className={s.textUpload}>Change</div>
            </label>
          </div>
        </div>
        <div className={s.wrapperBalance}>
          {mock_user_balance.map((item, key) => (
            <Balance {...item} key={key} />
          ))}
        </div>
      </div>
      <form className={s.form} onSubmit={handleSubmit(onSubmitHanlder)}>
        <div className={s.wrapperField}>
          {mock_user_fields.short.map((item, key) => (
            <div className={s.field} key={key}>
              <label className={s.labelField} htmlFor={item.name}>
                {item.label}
                <span className={s.requiredField}>*</span>
              </label>
              <div className={s.textField}>
                <Controller
                  name={item.name as 'firstname'}
                  control={control}
                  rules={{ required: `${item.label} field required` }}
                  render={({ field: { onChange, value } }) => (
                    <Input type={item.type} value={value} onChange={onChange} />
                  )}
                />
              </div>
              {errors[item.name as 'email'] && (
                <span className={s.errMessage}>
                  {errors[item.name as 'email']?.message}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className={s.wrapperFullField}>
          <label htmlFor='homeadress' className={s.labelField}>
            Home Adress<span className={s.requiredField}>*</span>
          </label>
          <div>
            <Controller
              name='homeadress'
              control={control}
              rules={{ required: `Home Adress field required` }}
              render={({ field: { onChange, value } }) => (
                <Input type='text' value={value} onChange={onChange} />
              )}
            />
          </div>
          {errors.homeadress && (
            <span className={s.errMessage}>{errors.homeadress.message}</span>
          )}
        </div>
        <div className={s.wrapperFlexField}>
          {mock_user_fields.flex.map((item, key) => (
            <div className={s.flexField} key={key}>
              <label htmlFor={item.name} className={s.labelField}>
                {item.label}
                <span className={s.requiredField}>*</span>
              </label>
              <div>
                <Controller
                  name={item.name as 'avanza'}
                  control={control}
                  rules={{ required: `${item.label} field required` }}
                  render={({ field: { onChange, value } }) => (
                    <Input type={item.type} value={value} onChange={onChange} />
                  )}
                />
              </div>
              {errors[item.name as 'avanza'] && (
                <span className={s.errMessage}>
                  {errors[item.name as 'avanza']?.message}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className={s.btnsAction}>
          <Button type='submit'>Save changes</Button>
          <Button type='button' className={s.btnCancel}>
            Сancel changes
          </Button>
        </div>
      </form>
    </div>
  )
}
