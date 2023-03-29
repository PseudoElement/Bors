import { Stocks } from 'shared/types/stocks'
import AmazonLogo from '/public/assets/image/amazonLogo.png'
import FigmaLogo from '/public/assets/image/figmaLogo.png'
import StripLogo from '/public/assets/image/stripLogo.png'

export const mock__stock_card: Stocks[] = [
  {
    id: 1,
    image: FigmaLogo.src,
    appName: 'Figma',
    appInitials: 'FGM',
    currency: '53.44',
    uppedPercent: '3,42',
    count: 3,
    hasNft: false,
  },
  {
    id: 2,
    image: StripLogo.src,
    appName: 'Stripe',
    appInitials: 'STP',
    currency: '53.44',
    uppedPercent: '3,42',
    count: 3,
    hasNft: true,
  },
  {
    id: 3,
    image: AmazonLogo.src,
    appName: 'Amazon',
    appInitials: 'AMZN',
    currency: '53.44',
    uppedPercent: '3,42',
    count: 3,
    hasNft: true,
  },
  {
    id: 1,
    image: FigmaLogo.src,
    appName: 'Figma',
    appInitials: 'FGM',
    currency: '53.44',
    uppedPercent: '3,42',
    count: 3,
    hasNft: false,
  },
  {
    id: 2,
    image: StripLogo.src,
    appName: 'Stripe',
    appInitials: 'STP',
    currency: '53.44',
    uppedPercent: '3,42',
    count: 3,
    hasNft: true,
  },
  {
    id: 3,
    image: AmazonLogo.src,
    appName: 'Amazon',
    appInitials: 'AMZN',
    currency: '53.44',
    uppedPercent: '3,42',
    count: 3,
    hasNft: true,
  },
]
