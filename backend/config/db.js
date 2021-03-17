'use strict';
const mongoose = require(`mongoose`);
const { Schema, model } = mongoose;
const { DB_URL, DB_NAME } = require('./consts.json');

const taskSchema = new Schema({
    description: String,
    dueDate: String,
    completed: Boolean
})



const Task = model('Task', taskSchema);

const loginSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
})

const Login = model('Login', loginSchema)

mongoose.connect(`mongodb://${DB_URL}/${DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Connected`);
    }
});

module.exports = {
    "Task": Task,
    "Login": Login
};