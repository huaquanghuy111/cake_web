const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    email: String, 
    password: String,
    address: String,
    createAt: {type: Date, default: Date.now}

})
module.exports = mongoose.model('User', User)