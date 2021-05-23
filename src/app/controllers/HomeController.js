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

    search(req, res, next){
        const searchkey = req.query.q;
        Product.find({name: {$regex:searchkey, $options: '$i'}})
        .then(products =>{
             res.render('search', { products: multiMongoosetoObject(products) }) 
            //res.json(products);
        })
        .catch(next);
    }
}
module.exports = new HomeControllers;