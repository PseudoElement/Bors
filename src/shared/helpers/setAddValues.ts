import { User } from 'shared/types/user';

type KeyOfUser = keyof User

type setValueType = (keys: KeyOfUser, value: string) => void

export const setAddValues = (user: User | null, setValue: setValueType) => {
  if (user) {
    Object.entries(user as User).map(item => {
      const [keys, value] = item

      setValue(keys as KeyOfUser, value)
    })
  }
}