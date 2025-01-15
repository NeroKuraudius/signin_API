const passport = require('passport')
const JWTSTrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt
const { User } = require('../models')

const Options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}

passport.use(new JWTSTrategy(Options, async(payload, cb)=>{
  try{
    const user = await User.findByPk(payload.id)
    return (null, user)
  } catch(err){
    return cb(err)
  }
}))

module.exports = passport