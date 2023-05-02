export function formatTelNumber(text: string) {
  const space = text.length > 1 && text.length > 4 ? ' ' : ''
  const slsh = text.length > 4 && text.length > 9 ? ' ' : ''
 

  return (
    text.substring(0, 3) +
    space +
    text.substring(3, 6) +
    slsh +
    text.substring(6, 8) +
    slsh +
    text.substring(8, 10)
  )
}
