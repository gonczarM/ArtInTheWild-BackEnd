const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const cors           = require('cors');

require('dotenv').config()

const PORT = process.env.PORT

require('./db/db')

//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false, 
  saveUninitialized: false
}));
app.use(bodyParser.json());
app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true,
	optionsSuccessStatus: 200 
}))

//controllers
const usersController = require('./controllers/users')
app.use('/users', usersController)
const muralsController = require('./controllers/murals')
app.use('/murals', muralsController)

//listener
app.listen(PORT, () => {
  console.log('listening... on port: ', PORT);
});