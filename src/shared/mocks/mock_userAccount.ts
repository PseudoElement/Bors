export const mock_user_fields = {
  short: [
    {
      label: 'Användarnamn',
      type: 'text',
      name: 'name',
      isRequired: true,
      maxLength: null
    },
    {
      label: 'Förnamn',
      type: 'text',
      name: 'first_name',
      isRequired: true,
      maxLength: null
    },
    {
      label: 'Efternamn',
      type: 'text',
      name: 'last_name',
      isRequired: true,
      maxLength: null
    },
    {
      label: 'E-post',
      type: 'email',
      name: 'email',
      isRequired: true,
      maxLength: null
    },
    {
      label: 'Mobilnummer',
      type: 'phone',
      name: 'phone_number',
      placeholder: 'Kräver 10 siffror',
      isRequired: true,
      maxLength: 12
    },
    {
      label: 'Personnummer',
      type: 'number',
      name: 'ssn',
      placeholder: 'Kräver 12 siffror',
      maxLength: 10,
      isRequired: true,
    },
  ],
  flex: [
    {
      label: 'Avanza',
      type: 'text',
      name: 'avanza',
      isRequired: false
    },
    {
      label: 'Nordnet',
      type: 'text',
      name: 'nordnet',
      isRequired: false
    },
  ],
}
