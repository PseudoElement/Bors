import { User } from 'shared/types/user';

export const checkUser = (user: User | null) => {
  const {
    email,
    avanza,
    nordnet,
    email_verified_at,
    phone_number,
    first_name,
    last_name,
    name
  }: User | null | any = user

  const isCheck = avanza || nordnet

  if (name && email && isCheck && email_verified_at && phone_number && first_name && last_name) return user;

  alert('För att köpa måste du fylla i en profil.')
}