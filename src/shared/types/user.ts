export interface User {
  avanza: null | string
  avatar: string
  balance: number
  buy_amount: number
  created_at: string
  email: string
  email_verified_at: null
  first_name: null | string
  forgot_password_at: string
  home_address: null | string
  id: number
  last_name: string | null
  name: string
  nordnet: null | string
  old_position: number
  old_stock_balance: number
  phone_number: null | number | string
  position: number
  present: number
  role_id: number
  settings: string[]
  ssn: null | string
  stock_balance: number
  updated_at: string
}

export interface LogoutUser {
  data: {
    message: string
  }
}

export interface UserShort {
  id: number
  email: string
  name: string
  updated_at: string
  created_at: string
}

export interface UserRegRequest {
  email: string
  name: string
  password: string
  confirm_password: string
}

export interface UserRegResponse {
  status: string
  messge: string
  data: {
    access_token: string
    token_type: string
    expires_in: number
    user: UserShort
  }
}

export interface UserAuthRequest {
  email: string
  password: string
}

export interface UserAuthResponse {
  status: string
  messge: string
  data: {
    access_token: string
    token_type: string
    expires_in: number
    user: User
  }
}

export interface UserMeResponse {
  status: string
  messge: string
  data: User
}
