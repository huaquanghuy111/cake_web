const express = require('express')


//database
const db = require('./config/db')
db.connect();
const app = express()
const port = process.env.PORT || 3000;
const path = require('path')
const exphbs  = require('express-handlebars');
app.engine('hbs', exphbs({extname:'.hbs'}));
app.set('view engine', 'hbs');
//config path
app.set('views', path.join(__dirname, 'resoure/views'))
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
//morgan
const morgan = require('morgan')
app.use(morgan('combined'))

//Router
const route = require('./routes')

route(app)


 
app.listen(port)
