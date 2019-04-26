// Import the ORM to create functions that will interact with the database.
//
// Written by Alex Chalyy on 4/26/2019.

var orm = require("../config/orm.js");

var cat = {
    selectAll: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

// Export the database functions for the controller.

module.exports = burger;