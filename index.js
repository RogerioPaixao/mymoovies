const express = require("express");
const bodyParser = require("body-parser");
const categoryRouter = require("./src/router/category");
const mooviesRouter = require("./src/router/moovies")

const app = express();

app.use(bodyParser.json());

app.use('/category', categoryRouter);
app.use('/moovies', mooviesRouter);

app.listen(3000, () =>{
 console.log('serven ruuning on http://localhost:3000');
});