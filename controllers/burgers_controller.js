var express = require("express");

var router = express.Router();

// Import the model burger.js to use its database functions.
var burger = require("../models/burger.js");


// gets all the burgers in the database upon load and render them to the index hbs file
router.get("/", function(req,res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// when a post is made to burgers api...we call the burger object (MODEL) and the create method, which is an extension of the ORM we used from the CAT activity
router.post("/api/burgers", function(req, res) {
    burger.create(
      ["burger_name"],
     [req.body.burger_name],
     function(result) {
      // Send back the ID of new burger, and use that to render the corresponding item in the DB (newest burger)
      res.json({ id: result.insertId });
    });
  });

router.put("/api/burgers/:id", function(req,res) {
    var condition= "id = " + req.params.id;


    burger.update({
        devoured: true,
    }, condition, function(result){
        if (result.changedRows ==0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
