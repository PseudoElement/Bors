export interface User {
  id: number
  role: string
  email: string
  email_verified_at: string
  first_name: string
  last_name: string
}

export interface UserRegRequest {
  email: string
  name: string
  password: string
  confirm_password: string
}

export interface UserAuthRequest {
  email: string
  password: string
}

export interface UserAuthResponse {
  status: string
  messge: string
  data : {
    access_token: string
    token_type: string
    expires_in: number
    user: {
      email: string
      name: string
      updated_at: string
      created_at: string
      id: number
    }
  }

}
