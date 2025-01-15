if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
};

const express = require('express')
const app = express();
const port = process.env.PORT || 3000

const bcrypt = require('bcryptjs')
const { User } = require('./models')

app.use(express.json())
app.listen(port, () => console.log(`Your app is running on port: ${port}!`))

app.post('/signin', async (req, res, next) => {
  const { account, password } = req.body

  try {
    const user = await User.findOne({ where: { account }, raw: true })
    if (!user) throw new Error('Incorrect account or password.')

    const userCheck = await bcrypt.compare(password, user.password)
    if (!userCheck) throw new Error('Incorrect account or password.')

    delete user.password
    const token = jwt.sign(user, process.env.SECRET, { expiresIn: '1d' })

    return res.json({ status: 200, message: 'Signin successfully', token })
  } catch (err) {

  }
  return res.send("hello world!")
})