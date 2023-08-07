import connection from './connection'
import {User, UserData} from '../../models/users'

//GET EXERCISES FROM DB
export function getExercises(db = connection) {
  return db('exercises').select()
}

//GET EXERCISES BY DIFFICULTY
export function getExercisesByDifficulty(difficulty: number, db = connection) {
  return db('exercises').select().where('difficulty', difficulty)
}

//GET USERS FROM DB
export function getUsers(db = connection) {
  return db('users').select()
}

//ADD NEW USER TO DB
export function addNewUser(user: UserData, db = connection) {
  return db<User>('users').insert(user)
}

//DELETE USER BY ID FROM DB
export function deleteUserById(id: number, db = connection) {
  return db('users').delete().where('id', id)
}
