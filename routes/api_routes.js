const path = require("path");
var notes = [];

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.readFile(path.join(__dirname,"db/db.json"))
        return res.json(notes);
    });
    app.post("/api/notes", function(req, res){
        res.writeFile(path.join(__dirname, "db/db.json"))
        return notes;
    });
    app.delete("/api/notes/:id", function(req, res){
        res.send();
    });


}

