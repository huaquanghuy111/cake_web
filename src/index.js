const express = require('express')
const session = require('express-session')

//database
const db = require('./config/db')
db.connect();
const app = express()
const port = 3000;
const path = require('path')
const exphbs  = require('express-handlebars');
app.engine('hbs', exphbs({extname:'.hbs'}));
app.set('view engine', 'hbs');
//config path
app.set('views', path.join(__dirname, 'resoure/views'))
app.use(express.static(path.join(__dirname, 'public')));



app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))


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