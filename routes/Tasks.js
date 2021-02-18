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
router.get("/read/:id", (req, res, next) => {
    Task.findById(req.params.id, (err, result) => {
        if (err) {
            next(err);
        }
        res.send(result);
    })
});

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

// query parameter
router.patch("/update/:id", (req, res, next) => {
    Task.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, result) => {
        if (err) {
            next(err);
        }
        res.status(202).send(`successfully updated!`)
    })
});

//replace a document
router.put("/replace/:id", (req, res, next) => {
    const { description, dueDate, completed } = req.query;
    Task.findByIdAndUpdate(req.params.id, { description, dueDate, completed }, { new: true }, (err, result) => {
        if (err) {
            console.error(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});

module.exports = router;