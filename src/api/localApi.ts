import { jwtDecode } from 'jwt-decode'

interface TokenData {
  exp: number // Expiration time in seconds
  iat: number // Issued At time in seconds
  userId: string // User ID
  roleId: number // Role ID
}

export function setToken(token: string, remember: boolean = true) {
  if (remember) {
    localStorage.setItem('token', token)
    return
  }
  sessionStorage.setItem('token', token)
}

export const getToken = () => localStorage.getItem('token') ?? sessionStorage.getItem('token')

export function getTokenData() {
  const token = getToken()
  let tokenDecoded = null

  if (token) {
    tokenDecoded = jwtDecode<TokenData>(token)
  }
  return tokenDecoded
}

export function clearToken() {
  localStorage.removeItem('token')
  sessionStorage.removeItem('token')
}
