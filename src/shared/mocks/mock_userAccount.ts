import { BalanceProps } from 'shared/types/balance'

export const mock_user_fields = {
  short: [
    {
      label: 'Användarnamn',
      type: 'text',
      name: 'name',
    },
    {
      label: 'Namn',
      type: 'text',
      name: 'first_name',
    },
    {
      label: 'Efternamn',
      type: 'text',
      name: 'last_name',
    },
    {
      label: 'E-post',
      type: 'email',
      name: 'email',
    },
    {
      label: 'Telefonnummer',
      type: 'phone',
      name: 'phone_number',
    },
    {
      label: 'Säkerhetstelefon',
      type: 'phone',
      name: 'security_number',
    },
  ],
  flex: [
    {
      label: 'Avanza AF kontonummer (Akite & Fondkonto) obs!',
      type: 'text',
      name: 'avanza',
    },
    {
      label: 'Nordnet AF kontonummer (Akite & Fondkonto) obs!',
      type: 'text',
      name: 'nordnet',
    },
  ],
}

export const mock_user_balance: BalanceProps[] = [
  {
    title: 'Saldo',
    count: 135.44,
    currency: 'sek',
  },
  {
    title: 'Avkastning',
    count: 8.98366,
    currency: 'sek',
    profit: '+5.63%',
  },
  {
    title: 'Rangordning',
    count: 387,
    profit: '+4',
  },
]

export const mock_user_icons = {
  avatar: '/assets/image/bigUser.png',
  camera: '/assets/icons/Camera.svg',
}
