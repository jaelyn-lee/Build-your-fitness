import connection from './connection'

//GET EXERCISES FROM DB
export function getExercises(db = connection) {
  return db('exercises').select()
}

//ADD NEW USER INFORMATION
export function addUsers(db = connection) {
  return db('users').insert()
}
