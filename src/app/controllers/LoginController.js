const User = require('../models/User')
class LoginController{
    //get method
    login(req, res){
        res.render('login')
    }
    //post method
    loginpost(req, res){
        // console.log('success')
        const email = req.body.email
        const password = req.body.password
        User.findOne({email: email}, (err, foundResult) =>{
            if(err){
                console.log(err);
            }else{
                if(foundResult.password === password){
                    res.send('You logged in!')
                }
                else{
                    res.send('Incorrect Email or Password')
                }
            }
        })


       
    }
}
module.exports = new LoginController;