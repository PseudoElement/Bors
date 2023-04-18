export function formatTelNumber(text: string) {
  const space = text.length > 1 && text.length > 4 ? ' ' : ''
  const slsh = text.length > 4 && text.length > 9 ? '-' : ''
  const pls = text.length > 2 ? '+' : ''

  return (
    pls +
    text.substring(0, 1) +
    space +
    text.substring(1, 4) +
    space +
    text.substring(4, 7) +
    slsh +
    text.substring(7, 9) +
    slsh +
    text.substring(9, 11)
  )
}
