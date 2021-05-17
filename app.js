const express = require('express')
const bcrypt = require('bcrypt')
// const crypto = require('crypto')

const app = express()

app.use(express.json())

// const hashedstr = crypto
//   .createHmac('sha256', password)
//   .update(pass)
//   .digest('hex')

const passText = 'ReskillAmericans123'
const saltRound = 10
let hashedPass

bcrypt.hash(passText, saltRound).then((hash) => {
  hashedPass = hash
})

app.post('/pass', (req, res) => {
  const { pass } = req.body

  if (!pass) {
    return res.status(400).json({
      status: 'fail',
      detail: {
        pass: 'Pass field is required',
      },
    })
  }
  bcrypt.compare(pass, hashedPass).then((result) => {
    if (result) {
      return res.status(200).json({
        status: 'success',
        data: {
          pass: 'Valid pass',
        },
      })
    } else {
      return res.status(401).json({
        status: 'fail',
        error: 'Invalid pass',
        detail: {
          pass: 'Your pass is incorrect',
        },
      })
    }
  })
})

app.listen('3000', () => {
  console.log('server started')
})
