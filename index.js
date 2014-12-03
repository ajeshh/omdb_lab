
// middleware setup
var express = require("express"),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");


