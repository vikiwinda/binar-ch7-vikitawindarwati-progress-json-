const { User } = require('../models' )
const { Room } = require('../models')
const { Fight } = require('../models')
// const rateLimit = require("express-rate-limit")


function format(user) {
    const { id, username } = user
    return {
        id,
        username,
        // accessToken: user.generateToken()
    }
}

function room(user) {
    const { room_id, Player1, Player2 } = user
    return {
        room_id,
        Player1,
        Player2
        // accessToken: user.generateToken()
    }
}

module.exports = {
    player1Login: (req, res) => {
        const currentUser = req.user;
        res.json(format(currentUser))
    },
    //on create room, 
    //add authenticated login to table player1 (not yet)
    
    createRoom: async(req, res) => {
        
        const newRoom = await Room.create({
            room_id: req.body.room_id,
            Player1: req.user //how to get from the authenticated? still null
        })
        res.json(room(newRoom))
    },

    //get: auth header
    //post: 
    player2Login: async(req, res) => {
        // const currentUser = req.user;
        // res.json(format(currentUser))
        const newPlayer = await Room.create({
            Player2: req.body.user
        })
        res.json(format(newPlayer))
    },

    //player1 choose one input to round1 from "R, P, S"
    //player2 turn{new endpoint?}
    //score as array took the first round by comparing RPS
    playFight: async(req, res) => {
        const initial = await Room.findByOne({
            attributes: ['room_id', 'Player1', 'Player2']
        })
        
        const play = await Fight.create({
            Player1_round_1: req.body.Player1_round_1
        })
    }
}