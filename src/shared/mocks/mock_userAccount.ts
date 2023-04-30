export const mock_user_fields = {
  short: [
    {
      label: 'Användarnamn',
      type: 'text',
      name: 'name',
    },
    {
      label: 'Förnamn',
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
      label: 'Mobilnummer',
      type: 'phone',
      name: 'phone_number',
      placeholder: 'Kräver 10 siffror',
      maxLength: 12
    },
    {
      label: 'Personnummer',
      type: 'number',
      name: 'ssn',
      placeholder: 'Kräver 12 siffror'
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
