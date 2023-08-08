import express from 'express'
import * as Path from 'node:path'

import exercises from './routes/exercises'
import users from './routes/users'
import workoutGoals from './routes/workoutGoals'
import fitnessLevels from './routes/fitnessLevels'

const server = express()

server.use(express.json())
server.use(express.static(Path.join(__dirname, 'public')))

server.use('/api/v1/exercises', exercises)
server.use('/api/v1/user-form', users)
server.use('/api/v1/workout-goals', workoutGoals)
server.use('/api/v1/fitness-levels', fitnessLevels)

if (process.env.NODE_ENV === 'production') {
  server.use('/assets', express.static(Path.resolve(__dirname, '../assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve(__dirname, '../index.html'))
  })
}

export default server
