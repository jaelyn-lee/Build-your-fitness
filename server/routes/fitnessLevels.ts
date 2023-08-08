import express from 'express'
const router = express.Router()

import * as db from '../db/db'

//GET ALL USERS FITNESS LEVELS
router.get('/', async (req, res) => {
  try {
    const fitnessLevels = await db.getUsersFitnessLevels()
    res.json({ fitnessLevels })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json('Error getting users fitness levels from Database')
    }
  }
})

//POST NEW USERS FITNESS LEVELS
router.post('/', async (req, res) => {
  try {
    const userFitnessLevels = req.body
    const newUserFitnessLevels = await db.addNewUserFitnessLevel(
      userFitnessLevels,
    )
    res.status(200).json(newUserFitnessLevels[0])
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
