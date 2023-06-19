import express from 'express'
const router = express.Router()

import * as db from '../db/db'

//GET EXERCISES ROUTE
router.get('/', (req,res) => {
  try {
    const exercises = db.getExercises()
    res.json(exercises)
  } catch (error) {
    res.status(500).json('Ops, something went wrong getting data from DB.')
    }
})