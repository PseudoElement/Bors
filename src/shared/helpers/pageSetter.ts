export const pageSetter = (
  total: number,
  current_page: number,
  last_page: number
) => {
  const pages: number[] = []

  for (let i = 1; i <= last_page; i++) {
    pages.push(i)
  }

  if (last_page < 7) return pages
  if (current_page >= last_page - 3)
    return pages.slice(last_page - 6, last_page)
  if (current_page === 1) return pages.slice(current_page - 1, current_page + 5)
  if (current_page === 2) return pages.slice(current_page - 2, current_page + 4)
  if (current_page > 2) return pages.slice(current_page - 3, current_page + 3)
  return pages
}
