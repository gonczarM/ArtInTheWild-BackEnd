const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const cors           = require('cors');
const formData 		 = require('express-form-data')
const cloudinary 	 = require('cloudinary')

require('dotenv').config()

const PORT = process.env.PORT

require('./db/db')

//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(formData.parse())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false, 
  saveUninitialized: false
}));
app.use(cors({
	origin: process.env.REACT_CLIENT_URL,
	credentials: true,
	optionsSuccessStatus: 200 
}))
cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})

//controllers
const usersController = require('./controllers/users')
app.use('/users', usersController)
const muralsController = require('./controllers/murals')
app.use('/murals', muralsController)
const cityOfChicagoController = require('./controllers/cityOfChicago')
app.use('/cityOfChicago', cityOfChicagoController)

//listener
app.listen(PORT, () => {
  console.log('listening... on port: ', PORT);
});