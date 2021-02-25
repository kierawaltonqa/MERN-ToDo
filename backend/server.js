const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const createError = require(`http-errors`);

// instantiate my app 
const app = express();
//middleware
app.use(cors());
app.use(bodyParser.json());

//import all of the routes in product.js
const productRoute = require('./routes/Tasks');

// .use method: lets us look for st at a specific path and have functions associated to it
app.use("/toDo", productRoute);

//error handling
app.use((req, res, next) => {
    next(createError(404, `Resource not found`));
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send(err.message || "something went wrong");
});

// communicate with the app on a specific port
const server = app.listen(5019, () => {
    console.log(`server has successfully started on port number: ${server.address().port}`);
})
