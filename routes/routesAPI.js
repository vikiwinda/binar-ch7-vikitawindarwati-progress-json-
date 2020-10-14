const express = require('express');
const router = express.Router();
// const userGameController = require('../controllers/controllersAPI/user_game')
const passport = require('../middlewares/auth')
const gameController = require('../controllers/gameController')
const restrict = passport.authenticate('jwt', { session: false })

//auth
const auth = require('../controllers/authController')

//start page endpoint /homepage
// router.get('/', (req, res) => res.render('homepage'))

//POST register n login
router.post('/register', auth.register)
router.post('/login', auth.login)
router.get('/login/protected', restrict, auth.whoami)

// get or post to enter a room?
router.get('/create-room', restrict, gameController.player1Login)
router.post('/create-room', restrict, gameController.createRoom)
//get or post for the fight room?
router.get('/fight/:room_id') //gamecontroller.fight
router.post('/fight/:room_id') //gamecontroller.turn

module.exports = router;