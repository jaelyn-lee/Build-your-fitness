import request from 'superagent'

const url = '/api/v1/exercises'

//GET EXERCISES FROM DB
export async function getExercises() {
  const res = await request.get(url)
  console.log(res)
  return res.body
}

