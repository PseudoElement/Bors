export function formatTelNumber(text: string) {
  const space = (text.length > 3 ) ? ' ' : ''
  const space2 =  text.length > 6 ? ' ' : ''
  const slsh =  text.length > 8 ? ' ' : ''

  return (
    text.substring(0, 3) +
    space +
    text.substring(3, 6) +
    space2 +
    text.substring(6, 8) +
    slsh +
    text.substring(8, 10) 
  )
}
