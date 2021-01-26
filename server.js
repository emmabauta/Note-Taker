const express = require("express");
//initialize app
const app = express();
//heroku port
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
//static files and resources
app.use(express.static("public"));
//require our abstracted route folders
require("./routes/api_routes")(app);
require("./routes/html_routes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT)
})