export interface Stocks {
    id: number
    hasNft: boolean
    image: string
    appName: string
    appInitials: string
    currency: string
    uppedPercent: string
    count: number
}

export interface StocksList {
    stocks: Stocks[]
}