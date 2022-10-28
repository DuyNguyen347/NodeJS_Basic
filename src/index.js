const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./confif/db');
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
const middlewares = require('./app/middlewares/sort')  

db.connect()

// HTTP logger
app.use(morgan('combined'));

app.use(express.static(path.join(__dirname, 'public')));
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
  }))
app.use(bodyParser.json())

// middlewares
app.use(middlewares)

// Template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            increase: i => ++i,
        }
    }),
);
app.set('view engine', 'hbs');
//app.set('views', path.join(__dirname, 'resource/views'));
app.set('views', path.join(__dirname, 'resource','views'));

//console.log('PATH', path.join(__dirname, 'resource/views'));

//routes init

route(app);

//  truy cập vào web server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
