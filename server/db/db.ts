import connection from './connection'

//GET EXERCISES FROM DB
export function getExercises(db = connection) {
  return db('exercises').select()
}

//GET EXERCISES BY DIFFICULTY
export function getExercisesByDifficulty(difficulty: number, db = connection) {
  return db('exercises').select().where('difficulty', difficulty)
}

//ADD NEW USER INFORMATION
export function addUsers(db = connection) {
  return db('users').insert()
}
