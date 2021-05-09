const mongoose = require('mongoose');
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/Cakes', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });
        console.log('connect successfully')
    }catch(error){
        console.log('connect failed')
    }
}

module.exports = { connect }