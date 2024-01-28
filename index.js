const express = require("express");
const bodyParser = require("body-parser");
const mooviesRouter = require("./src/router/moovies");
const categoryRouter = require("./src/router/category");


const app = express();
const PORT= process.env.PORT|| 3000

app.use(bodyParser.json());

app.use('/moovies', mooviesRouter);
app.use('/category', categoryRouter);

app.listen(PORT, () =>{
 console.log(`serven ruuning on http://localhost:${PORT}`)
});