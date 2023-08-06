import express from 'express'
const router = express.Router()

import * as db from '../db/db'

//GET ALL USERS
router.get('/', async (req, res) => {
  try {
    const users = await db.getUsers()

    res.json({ users })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

//POST NEW USERS
router.post('/', async (req, res) => {
  try {
    const user = req.body
    console.log(user)

    await db.addNewUser(user)
    res.status(200)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
})

export default router
