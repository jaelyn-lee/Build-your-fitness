import connection from "./connection"

export function getExercises (db = connection) {
  return db('exercises').select()
}