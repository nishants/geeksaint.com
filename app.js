
// Dependencies
var express    = require("express");
var bodyParser = require("body-parser");

// Create and configure an express app
var app        = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configre port  
var port = process.env.PORT || 8080;      
app.listen(port);

// Create a base route
var router = express.Router();
var rootURL = process.env.rootURL || '/api';
app.use(rootURL, router);
console.log("Listening on url : " + rootURL + "/" + port)

// Add a requrest handler
router.get('/', function(req, res) {
    res.json({ message: 'geeksaint.com API!' });   
});

/*  ***************** DB config ***************  */
