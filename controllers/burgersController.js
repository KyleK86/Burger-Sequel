// Import the model to use its database functions.
var db = require("../models/");

module.exports = function (app) {

    // GET route for getting all of the burgers
    app.get("/", function (req, res) {
        console.log("request");
        // findAll returns all entries for a table when used with no options
        db.Burger.findAll({}).then(function (burger) {
            // We have access to the burgers as an argument inside of the callback functions
            let hbsObj = {
                burgers: burger
            };
            res.render("index", hbsObj);
        });
    });

    // POST route for saving a new burger
    app.post("/api/burgers", function (req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        db.Burger.create({
            burger_name: req.body.text,
            devoured: req.body.complete
        }).then(function (burger) {
            // We have access to the new burger as an argument inside of the callback function
            res.json(burger);
        });
    });
    // DELETE route for deleting todos. We can get the id of the todo to be deleted
    // from req.params.id
    app.delete("/api/burgers/:id", function (req, res) {
        // Destroy takes in one argument: a "where object describing the todos we want to destroy
        db.Burger.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (burger) {
                res.json(burger);
            });

    });

    // PUT route for updating todos. We can get the updated todo data from req.body
    app.put("/api/burgers", function (req, res) {
        // Update takes in two arguments, an object describing the properties we want to update,
        // and another "where" object describing the todos we want to update
        db.Burger.update({
                burger_name: req.body.text,
                devoured: req.body.complete
            }, {
                where: {
                    id: req.body.id
                }
            })
            .then(function (burger) {
                res.json(burger);
            });

    });
};