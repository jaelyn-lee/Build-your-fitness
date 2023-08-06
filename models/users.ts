export interface UserData {
  firstName: string
  lastName: string
  age: number
  height: number
  weight: number
  targetWeight: number
}

export interface User extends UserData {
  id: number
}
