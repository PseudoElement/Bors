export interface SiteData {
  desc?: string
  infos?: InfoCardProps[]
  logo?: string
}

export interface InfoCardProps {
  created_at: string
  icon: string
  id: number
  order: number
  status: number
  title: string
  updated_at: string
}
export interface SponsorType {
  id: number
  title: string
  icon: string
  status: number
  order: number
  created_at: string
  updated_at: string
}

export interface SponsorsList {
  cards: SponsorType[]
}

export interface SponsorsInfoResponse {
  data: SponsorType[]
  messge: string
  status: string
}

export interface SiteDataResponse {
  data: SiteData
  messge: string
  status: string
}
