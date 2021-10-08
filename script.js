const express = require("express");

const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "views")));

app.get("/", function(req, res) {

 
    res
    .status(200)
    .sendFile(path.join(__dirname, "views", "re.html"));

});

app.listen(3000, function() {
    console.log("we are listing at port 3000");
});