if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
};

const express = require('express')
const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.listen(port, ()=>console.log(`Your app is running on port: ${port}!`))

