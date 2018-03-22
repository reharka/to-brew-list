var  user = {};

function getUserName() {
	
	user.fisrtName = $("#first_name").val().trim(),
	user.lastName = $("#last_name").val().trim(),
	user.email = $("#email").val().trim(),
	user.password = $("#password").val().trim()
};

module.exports = user;