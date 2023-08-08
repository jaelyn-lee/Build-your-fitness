import { FitnessLevelData, WorkoutGoalData } from './../../models/users'
import connection from './connection'
import { User, UserData } from '../../models/users'

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
  return db<User>('users').insert(user).returning('*')
}

//DELETE USER BY ID FROM DB
export function deleteUserById(id: number, db = connection) {
  return db('users').delete().where('id', id)
}

//GET ALL USERS WORKOUT GOALS
export function getUserWorkoutGoals(db = connection) {
  return db('workout_goals').select()
}

//ADD NEW USER WORKOUT GOAL
export function addNewUserWorkoutGoal(
  workoutGoal: WorkoutGoalData,
  db = connection,
) {
  return db('workout_goals').insert(workoutGoal)
}

//GET ALL USERS FITNESS LEVELS
export function getUsersFitnessLevels(db = connection) {
  return db('fitness_levels').select()
}

//ADD NEW USER FITNESS LEVELS
export function addNewUserFitnessLevel(
  fitnessLevel: FitnessLevelData,
  db = connection,
) {
  return db('fitness_levels').insert(fitnessLevel)
}
