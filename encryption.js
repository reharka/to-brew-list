var express = require("express");
var CryptoJS = require("crypto-js");
var bodyParser = require("body-parser");
var path = require("path");
var CryptoJS = require("crypto-js");
var mysql = require("mysql");
var materialize = require("materialize-css");
var app = express();
var PORT = 3002;
var encryption_key = process.argv[2].toString(CryptoJS.enc.Utf8) + " " + process.argv[3].toString(CryptoJS.enc.Utf8) + " " + process.argv[4].toString(CryptoJS.enc.Utf8) + " " + process.argv[5].toString(CryptoJS.enc.Utf8) + " " + process.argv[6].toString(CryptoJS.enc.Utf8) + " " + process.argv[7].toString(CryptoJS.enc.Utf8) + " " + process.argv[8].toString(CryptoJS.enc.Utf8) + " " + process.argv[9].toString(CryptoJS.enc.Utf8) + " " + process.argv[10].toString(CryptoJS.enc.Utf8) + " " + process.argv[11].toString(CryptoJS.enc.Utf8) + " " + process.argv[12].toString(CryptoJS.enc.Utf8)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/:method/:user/:pass", function (req, res) {
	if (req.params.method == "login") {
		res.send(login(req.params.user, req.params.pass))
	}
	if (req.params.method == "new_user") {
		res.send(new_user(req.params.user, req.params.pass))
	}
})
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});
function encrypt(in_pass, in_user) {
	return (CryptoJS.AES.encrypt(in_pass, encryption_key + in_user))
}
function decrypt(out_pass, in_user) {
	var de_pass = CryptoJS.AES.decrypt(out_pass.toString(), encryption_key + in_user);
	return (de_pass.toString(CryptoJS.enc.Utf8))
}
function connect(method) {
	var connection = mysql.createConnection({

		// TODO ---------------------- UPDATE with mysql database info
		host: "localhost",
		port: 3003,
		// Your username
		user: "root",
		// Your password
		password: "All4myFam",
		database: "login_db"
	});
	// TODO ------------------- probs a bad idea to select * from a user/password database
	// TODO ----------------------update database we are using
	connection.query("SELECT * FROM login_db", function (err, res) {
		if (err) { throw err }
		//TODO --------------------- use return() to return username/password info for use by other functions
		//return()
	})

	connection.end()
}
function new_user(user_name, password) {
	//username is not valid by default
	var user_name_available = false
	//TODO -----CONNECT TO login_db to see if username is available
	if (user_name_available) {
		// return info that username is available and the encrypted password to be stored in database
		return ([true, encrypt(password, user_name)])
	}
	else {
		return (false)
	}
}
function login(user_name, password) {
	// login is unavailable by default
	var result = false
	var user_name_inuse = false
	//TODO -----------CONNECT TO login_db to see if username exists
	if (user_name_inuse) {
		var encrypted_pass = ""
		//TODO --------------CONNECT TO login_db to retrieve associated encrypted password
		var decrypted_pass = decrypt(encrypted_pass, user_name)
		if (decrypted_pass === password) {
			result = true
		}
	}
	return (result)
}