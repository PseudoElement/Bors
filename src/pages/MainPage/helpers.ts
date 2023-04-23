import {
  getInfoCards,
  getLeadersInfo,
  getSponsorsInfo,
} from 'shared/api/routes/main'
import { LeaderList } from 'shared/types/leaderboard'
import { dateOneMonthBefore, formatDate } from 'shared/helpers/dateFormatters'

export const getSponsors = async () => {
  try {
    const { data } = await getSponsorsInfo()
    if (data.status === 'success') {
      return data.data
    }
    throw new Error()
  } catch (e) {
    console.error(e)
  }
}

export const getInfo = async () => {
  try {
    const { data } = await getInfoCards()
    if (data.status === 'success') {
      return data.data
    }
    throw new Error()
  } catch (e) {
    console.error(e)
  }
}

export const getLeaders = async (date: Date) => {
  const dataArray: LeaderList[] = []

  try {
    for (let i = 0; i < 3; i++) {
      const { data } = await getLeadersInfo(
        formatDate({
          date: dateOneMonthBefore(date, -i),
        })
      )
      if (data.status === 'success') {
        dataArray.push({
          date: formatDate({
            date: dateOneMonthBefore(date, -i),
            variant: 'MMMM dd, yyyy',
          }),
          array: data?.data,
        })
      }
    }
    if (dataArray.length) {
      return dataArray
    }
    throw new Error()
  } catch (e) {
    console.error(e)
  }
}
