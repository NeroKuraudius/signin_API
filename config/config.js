require('dotenv').config()

module.exports =
{
  "development": {
    "username": "SKIP",
    "password": "SKIP",
    "database": "SKIP",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DATABASE,
    "host": process.env.HOST,
    "dialect": "mysql"
  }
}
