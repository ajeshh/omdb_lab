
// middleware setup
var express = require("express"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

//stylesheet
app.use(express.static(__dirname + "/public"));


app.get("/movies", function (req, res) {
	res.render("movies/index");
});

app.get("/movies/results", function (req, res) {
	res.render("movies/results");
} );

app.get("/movies/details", function (req, res) {
	res.render("movies/details");
} );

app.get("/movies/bookmark", function (req, res) {
	res.render("movies/bookmark");
} );

app.listen(3000, function () {
  console.log("Visit localhost:3000");
});