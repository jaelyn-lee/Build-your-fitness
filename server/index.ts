import axios from 'axios'
import express from 'express'

const server = express ()
server.use(express.json())

server.get('api/v1/exercises', async (req, res) => {
  try {
    const exercise = req.params.exercise
    const APIkey = 'dFThowQSlyj/z/tqGEwo9w==pTwYPR8poAcyfqSL'

    const response = await axios.get(`https://api.api-ninjas.com/v1/exercises&appid=${APIkey}`)

    res.json(response.data)
  } catch (error) {
    res.status(500).json({error})
  }
})

const port = process.env.PORT || 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port)
})
