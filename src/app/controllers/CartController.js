const Product = require('../models/Product')
const Cart = require('../models/cart')
class CartController{
    addtoCart(req, res){
        const productId = req.params.id;
        
        const cart = new Cart(req.session.cart? req.session.cart: {});

        Product.findById(productId, function(err, product){
            if(err){
                res.redirect('/');
            }
            cart.add(product, product.id);
            res.session.cart  = cart;
            res.redirect('/');
        })
    }

    reduceproduct(req, res,next){
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        cart.reduceByOne(productId);
        req.session.cart = cart;
        res.redirect('/');
    }
    
    removeproduct(req, res, next){
        var productId = req.params.id;
        var cart = new Cart(req.session.cart ? req.session.cart : {});
        cart.removeItem(productId);
        req.session.cart = cart;
        res.redirect('/');
    }

    show(req, res, next){
        if(!req.session.cart) {
            return res.render('cart', {products: null});
        }
        var cart = new Cart(req.session.cart);
        return res.render('cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
    }

}
module.exports  = new CartController;