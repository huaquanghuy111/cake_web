const homeRouter = require('./home')
const productRouter = require('./product')
const registerRouter = require('./register')
const loginRouter = require('./login')

function route(app){
    app.use('/register',registerRouter)
    app.use('/login',loginRouter)
    app.use('/products',productRouter)
    app.use('/', homeRouter);

}
module.exports = route;