const Product = require('../models/Product')
const { MongoosetoObject } = require('../../util/mongoose')


class ProductController{
    show(req, res, next){
        Product.findOne({slug: req.params.slug})
            .then(products =>{
                res.render('products/show',{ products: MongoosetoObject(products) })
            })
            .catch(next);
        
    }

}
module.exports = new ProductController