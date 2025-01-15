if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
};

const express = require('express')
const app = express();
const port = process.env.PORT || 3000

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { User } = require('./models')
const { inputChecker } = require('./middleware/inputChecker')

app.use(express.json())
app.listen(port, () => console.log(`Your app is running on port: ${port}!`))

app.post('/signin', inputChecker, async (req, res, next) => {
  const { account, password } = req.body

  try {
    const user = await User.findOne({ where: { account }, raw: true })
    if (!user) {
      console.log('Signin Error: Incorrect account or password')
      return res.status(500).json({ Error: 'Incorrect account or password' })
    }

    const userCheck = await bcrypt.compare(password, user.password)
    if (!userCheck) {
      console.log('Signin Error: Incorrect account or password')
      return res.status(500).json({ Error: 'Incorrect account or password' })
    }

    delete user.password
    const token = jwt.sign(user, process.env.SECRET, { expiresIn: '1d' })

    return res.status(200).json({ message: 'Signin successfully', token })
  } catch (err) {
    next(err)
  }
})