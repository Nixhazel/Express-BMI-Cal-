const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    
});


app.listen(3000, () => {
    console.log("server started on port 3000");
});