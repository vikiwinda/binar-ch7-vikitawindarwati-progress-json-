const { User } = require('../models' )
// const passport = require('../middlewares/auth' )


function format(user) {
    const { id, username } = user
    return {
        id,
        username,
        accessToken: user.generateToken()
    }
}

module.exports = {
    register : (req, res, next) => {
    // Kita panggil static method register yang sudah kita buat tadi
        User.register (req.body)
        .then(user => {
            res.json(user) 
            // res.redirect('/homepage')
        })
        .catch(err => next(err))    
    },
    
    login: (req, res) => {
    User.authenticate (req.body)
        .then(user => {
            res.json(
            format(user)
            )
        })
    },

    whoami: (req, res) => {
        const currentUser = req.user;
        res.json(currentUser)
    },

    // checkRole: async(req, res) => {
    //     const checkingRole = await User.findOne({
    //         where: { role: req.user.role }
    //     });
    //     if (checkingRole === "Player") {
    //         const playerInfo = await User.findByPk({
    //             where: {id: req.user.id }
    //         });
    //         res.json(playerInfo)
    //     }
    //     else if(checkingRole === "Admin") {
    //         const adminPrivilege = await User.findAll({

    //         })
    //         res.json(adminPrivilege)
    //     }
        
    // } 
}