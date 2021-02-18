`use strict`;
const router = require('express').Router();
const { Task } = require("../config/db");

// requests (CRUD)
router.get("/getAll", (req, res, next) => {
    Task.find((err, tasks) => {
        if (err) {
            next(err);
        }
        res.send(tasks);
    })
});

//read by id
router.get("read/:id", (req, res, next) => {
    Task.findById((err, tasks) => {
        if (err) {
            next(err);
        }
        res.send(tasks);
    })
})

//create
router.post("/create", (req, res, next) => {
    const item = new Task(req.body);
    console.log(item);
    // saving it to the database and print result if successful, otherwise print the error
    item.save().then((result) => {
        res.status(201).send(`${result.description} has been added successfully`)
    })
        //refactor to use a middleware function isntead!
        .catch((err) => next(err));
});

//delete
router.delete("/delete/:id", (req, res, next) => {
    Task.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        } else {
            res.status(204).send(`successfully deleted`);
        }
    })
});

module.exports = router;