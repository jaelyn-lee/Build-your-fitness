import request from 'superagent'
import { User } from '../../models/users'

const url = '/api/v1/users'

//GET USERS FROM DB
export async function getUsers() {
  const res = await request.get(url)
  return res.body
}

// () {
//   const res = await request.get(url)
//   console.log(res)
//   return res.body
// }

//ADD USER TO DB
export async function addUser(user: User) {
  await request.post(url).send(user)
}
