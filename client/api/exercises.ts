import request from 'superagent'

const url = '/api/v1'

//GET EXERCISES FROM DB
export async function fetchExercises() {
  const res = await request.get(`${url}/exercises`)
  return res.body
}


//ADD NEW EXERCISE TO DB