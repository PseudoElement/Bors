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

export interface SiteDataResponse {
  data: SiteData
  messge: string
  status: string
}
