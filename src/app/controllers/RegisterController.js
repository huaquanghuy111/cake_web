const User = require('../models/User')

class RegisterController{
        //get method
        register(req, res){
            res.render('resgister')
        }
        //post method
        signin(req, res){
            // console.log('success')
            const email = req.body.email
            const password = req.body.password
            const address = req.body.address
           

            const newUser = new User({
                email : email,
                password : password,
                address : address,
                
                
            })
            newUser.save(err =>{
                err? console.log(err): res.send('Register successfully!')
            })
        }
}
module.exports = new RegisterController;