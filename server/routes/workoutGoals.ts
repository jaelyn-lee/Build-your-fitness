import express from 'express'
const router = express.Router()

import * as db from '../db/db'

//GET ALL USERS WORKOUT GOALS
router.get('/', async (req, res) => {
  try {
    const workoutGoals = await db.getUserWorkoutGoals()
    res.json({ workoutGoals })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

//POST NEW USERS WORKOUT GOALS
router.post('/', async (req, res) => {
  try {
    const workoutGoal = req.body
    await db.addNewUserWorkoutGoal(workoutGoal)
    res.status(201).json({ message: 'Workout goal added successfully' })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
