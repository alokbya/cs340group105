/*
    SETUP
*/
var db = require('./database/db-connector');
var express = require('express');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const { engine } = require('express-handlebars');
var exphbs = require('express-handlebars');         // Import express-handlebars
app.engine('.hbs', engine({ extname: ".hbs" }));      // Create an instance of the handlebars engine to process templates
app.set('view engine', '.hbs');                     // Tell express to use the handlebars engine whenever it encounters a *.hbs file.

/*
    ROUTES
*/

const pagesRoutes = require('./routes/pages');
const plantsRoutes = require('./routes/plants');
const gardensRoutes = require('./routes/gardens');

PORT = 9124;

app.use(pagesRoutes);
app.use(plantsRoutes);
app.use(gardensRoutes);


app.get('/', function (req, res)            // // This is the basic syntax for what is called a 'route'
{
    res.render('index');
});

/*
    LISTENER
*/
app.listen(PORT, function () {            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.')
});