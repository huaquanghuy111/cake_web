const Product = require('../models/Product')
const { multiMongoosetoObject } = require('../../util/mongoose')


class HomeControllers{
     index(req, res) {
         Product.find({}, function(err, products){
                if(!err){
                    res.render('home',{
                        products: multiMongoosetoObject(products)
                    })
                }
                else res.status(400).json({err: 'error'})
                   
         })
        
    }
}
module.exports = new HomeControllers;