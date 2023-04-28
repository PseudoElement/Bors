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
    },
    {
      label: 'Personnummer',
      type: 'phone',
      name: 'ssn',
    },
  ],
  flex: [
    {
      label: 'Avanza',
      type: 'text',
      name: 'avanza',
      isRequired: true
    },
    {
      label: 'Nordnet',
      type: 'text',
      name: 'nordnet',
      isRequired: false
    },
  ],
}
