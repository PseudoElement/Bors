import { infoCardData } from 'shared/types/infoCards'

import infoCardCursor from '/public/assets/image/info-card-cursor.png'
import infoCardPC from '/public/assets/image/info-card-pc.png'
import infoCardWallet from '/public/assets/image/info-card-wallet.png'
import infoCardCup from '/public/assets/image/info-card-cup.png'

export const mockInfoCardsData: infoCardData[] = [
  {
    title:
      'A simple and convenient platform for online stock trading. <span>Start trading</span> in minutes',
    image: infoCardCursor.src,
  },
  {
    title:
      'On the site you will see up-to-date information about exchange events and <span> will be able to take part in them </span> after authorization',
    image: infoCardPC.src,
  },
  {
    title:
      'After authorization, the user will see his <span>account with demo money</span> for which you can buy 50-100 different shares',
    image: infoCardWallet.src,
  },
  {
    title:
      'Every day we update the promotion rate, and <span>reward the 10 leaders</span> who have earned the most demo money!',
    image: infoCardCup.src,
  },
]
