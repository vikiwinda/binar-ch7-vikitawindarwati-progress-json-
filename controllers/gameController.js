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

// function apilimiter() {
//     const apiLimiter = ratelimit({
//         windowMs: 10 * 60 * 1000, //1 menit
//         max:2
//     })
// }

module.exports = {
    waiting: (req, res) => {
        const currentUser = req.user;
        res.json(format(currentUser))
        // .then(user => {  res.json(format(user)) })  //add conditional maximal 2 user
        // .catch((error) => { res.status(400).send(error); })
    },
    //input room name
    //save the player in body?
    //user or player input room_id(string) name
    //server response room_id name/endpoint(redirect)
    
    //should the room_id in fight table or room table instead?
    createRoom: async(req, res) => {
        const savePlayer = await Fight.create({
            room_id: req.body.room_id,
            Player1: req.body.Player1
        });

        req.body.users.forEach((player)=>{
            const player = await User.findById(player.id)
            if (!player) { return res.status(400) }
        
            const room = {
                
            }
        })
        // const fightRoom = await Fight.create()
            // req.body.user.forEach((player) => {
            //     const players = await User.findById(player.id);
            //     if(!players) {
            //         return res.status(400);
            //     }
            // }))
        
        //response new created room_id etc
        res.json(savedPlayer)
    }

    //database add score and rounds?
    //desain database untuk fight/room_id
    //
    // fight: (req, res) => {
        // 
    // }
}