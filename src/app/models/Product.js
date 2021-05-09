const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    name: String,
    discript: String , 
    price: Number,
    img: String,
    slug: String
})

module.exports = mongoose.model('Product',Product)