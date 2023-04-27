export const pageSetter = (count: number, current: number, last_page: number) => {
  const pages: number[] = []

  if (last_page >= 5) {
    if (current >= count - 2) {
      for (let i = count - 4; i < 100; i++) {
        pages.push(i)
      }
    }
    if (current > 2 && current < count - 2) {
      for (let i = current - 2; i <= current + 3; i++) {
        pages.push(i)
      }
    }
    if (current <= 1) {
      for (let i = current; i <= current + 4; i++) {
        pages.push(i)
      }
    }
    if (current === 2) {
      for (let i = current - 1; i <= current + 4; i++) {
        pages.push(i)
      }
    }
  } else {
    for (let i = 1; i === last_page; i++) {
      pages.push(i)
    }
  }

  return pages.slice(0, 5)
}
