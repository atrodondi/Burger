// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// creating a burger object that holds all of the methods we will need, eventually all of CRUD )we are missing destory right now
var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    create: function(cols,vals, cb){
        orm.create("burgers", cols, vals,function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      },

      
}

// Export the database functions for the controller (burgerController.js).
module.exports = burger;