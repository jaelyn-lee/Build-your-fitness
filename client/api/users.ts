import request from 'superagent'
import { User, UserData } from '../../models/users'

const url = '/api/v1'

//GET USERS FROM DB
export async function fetchUsers() {
  const res = await request.get(`${url}/user-form`)
  return res.body
}

//ADD USER TO DB
export async function addNewUser(user: UserData) {
  await request
    .post(`${url}/user-form`)
    .send(user)
    .set('Content-Type', 'application/json')
}
