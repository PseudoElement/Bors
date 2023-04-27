import { useToken } from '../hooks/useToken'
import {api} from "../api";

export const AuthCheck = (props: any) => {
  const token = useToken()
  api.defaults.headers.common['Authorization'] = 'Bearer ' + token

  return props.children
}
