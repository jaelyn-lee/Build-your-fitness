import request from 'superagent'

const url = '/api/v1/exercises'

// export function getGreeting(): Promise<string> {
//   return request.get('/api/v1/greeting').then((res) => res.body.greeting)
// }

//GET EXERCISES FROM DB
export function fetchExercises () {
  const res = await request.get(url)
  return res.
}