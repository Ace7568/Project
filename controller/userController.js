const userModule = require('../module/userModule')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    create: (req,res)=>{
        const userData = req.body;
        const {email} = userData;
        userModule.userCollection.find({email:email})
        .then((data)=>{
            if(data.length >=1) {return res.send({status:"User already Present"})}
            else{
                bcrypt.genSalt(10, (err,salt)=>{
                    bcrypt.hash(userData.password, salt, (err, hash) => {
                        userData.password = hash
                        userModule.create(userData)

                        let token = jwt.sign({email:email, userid: data._id},"shhhhh")
                        console.log(token)
                        res.cookie("token", token)
                        return res.send({Status:"User added"})
                    })
                })
                
            }
        })
    },

    // login: (req,res) => {
        
    // }
}