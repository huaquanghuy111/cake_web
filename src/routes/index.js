const homeRouter = require('./home')
const productRouter = require('./product')
const registerRouter = require('./register')
const loginRouter = require('./login')
const cartRouter = require('./cart')

function route(app){
    app.use('/cart',cartRouter);
  
    app.use('/register',registerRouter)
    app.use('/login',loginRouter)
    app.use('/products',productRouter)
    app.use('/', homeRouter);


}
module.exports = route;