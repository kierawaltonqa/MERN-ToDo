`use strict`;
const router = require('express').Router();
const { ToDo } = require("../config/db");

// requests (CRUD)
router.get("/getAll", (req, res, next) => {
    ToDo.find((err, toDos) => {
        if (err) {
            next(err);
        }
        res.send(toDos);
    })
});

//read by id
router.get("read/:id", (req, res, next) => {
    ToDo.findById((err, toDos) => {
        if (err) {
            next(err);
        }
        res.send(toDos);
    })
})

//create
router.post("/create", (req, res, next) => {
    const item = new ToDo(req.body);
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
    ToDo.findByIdAndDelete(req.params.id, (err) => {
        if (err) {
            next(err);
        } else {
            res.status(204).send(`successfully deleted`);
        }
    })
});

module.exports = router;