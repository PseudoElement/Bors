import format from 'date-fns/format'
import addMonths from 'date-fns/addMonths'
import * as locales from 'date-fns/locale'

type DateVariants = 'yyyy-MM-dd' | 'MMMM dd, yyyy'

interface DateFormatter {
  date: Date
  variant?: DateVariants
  locale?: string
}

// format date in 2023-04-18
// or more custom variant, add new string in DateVariants
export const formatDate = ({
  date,
  locale,
  variant = 'yyyy-MM-dd',
}: DateFormatter) => {
  return format(new Date(date), variant, {
    locale: locales[locale?.toLowerCase() as keyof typeof locales],
  })
}

// return date on COUNT month before
export const dateOneMonthBefore = (
  currentDate = new Date(),
  counter: number = -1
) => {
  return addMonths(currentDate, counter)
}
