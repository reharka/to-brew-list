var orm = require("../config/userOrm.js");

var user = {
	 all: function(cb) {
    orm.all("user", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("user", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("user", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("user", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = user;

