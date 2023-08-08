import request from 'superagent'
import {
  FitnessLevelData,
  User,
  UserData,
  WorkoutGoalData,
} from '../../models/users'

const url = '/api/v1'

//GET USERS FROM DB
export async function fetchUsers() {
  const res = await request.get(`${url}/user-form`)
  return res.body
}

//ADD USER TO DB
export async function addNewUser(user: UserData) {
  const res = await request
    .post(`${url}/user-form`)
    .send(user)
    .set('Content-Type', 'application/json')
  return res.body
}

//ADD USER'S WORKOUT GOALS TO DB
export async function addNewUserWorkoutGoal(userWorkoutGoal: WorkoutGoalData) {
  const res = await request
    .post(`${url}/workout-goals`)
    .send(userWorkoutGoal)
    .set('Content-Type', 'application/json')
  console.log(res.body)

  return res.body
}

//ADD USER'S FITNESS LEVELS TO DB
export async function addNewUserFitnessLevel(
  userFitnessLevel: FitnessLevelData,
) {
  const res = await request
    .post(`${url}/fitness-levels`)
    .send(userFitnessLevel)
    .set('Content-Type', 'application/json')
  return res.body
}
