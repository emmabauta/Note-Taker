const path = require("path");
const fs = require("fs");
var notes = [];

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        fs.readFile(path.join(__dirname,"../db/db.json"), 'utf8', function (err, notes){
            if (err) throw err;
            console.log(notes);
            return res.json(JSON.parse(notes));
        })
       
    });
    app.post("/api/notes", function(req, res){
        fs.writeFile(path.join(__dirname, "../db/db.json"))
        return notes;
    });
    app.delete("/api/notes/:id", function(req, res){
        res.send();
    });


}
