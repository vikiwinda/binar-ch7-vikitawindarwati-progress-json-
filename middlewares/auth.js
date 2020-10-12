const passport = require('passport')
const { Strategy : JwtStrategy, ExtractJwt } = require('passport-jwt')
const { User } = require('../models');

//JWT
const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'secret',
}


//this error is because of sequelize, or anything wrong with these?
// payload.id is not a problem, the problem is in table User. What's wrong with it? why can't it recognize the findOne?
// Imma try one other example from net. if this is still not usable, I'll take the facilitator program

//after this still have to do game using Postman, limit my search to three hours
//after that succeed, then moving on on separating json with render
//after that succeed, polish the dashboard
//make two repo of this, one connected with ch6, one stand alone rest api
passport.use(new JwtStrategy(options, async(payload, done) => {
    try {
        const user = await User.findByPk(payload.id)
        return done (null, user)
    }
    catch (err) {
        return done(err, null)
    }
}))

module.exports = passport;