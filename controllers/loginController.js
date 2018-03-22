var express = require("express");

var router = express.Router();

//login.js model
var login = require("../models/login.js");

router.get("/login", function(req, res) {
	login.all()
})

module.exports = router;