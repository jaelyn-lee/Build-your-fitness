import connection from "./connection"

//GET EXERCISES FROM DB
export function getExercises (db = connection) {
  return db('exercises').select()
}