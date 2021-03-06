const path = require("path");
const fs = require("fs");
var notes = [];

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), 'utf8', function (err, data) {
            if (err) throw err;
            return res.json(JSON.parse(data));
        });
    });
    app.post("/api/notes", function (req, res) {

        fs.readFile(path.join(__dirname, "../db/db.json"), 'utf8', function (err, data) {
            if (err) throw err;
            var notes = JSON.parse(data)
            console.log(notes);// update notes section
            req.body.id = Math.floor(Math.random() * 1000) + 1
            notes.push(req.body);//add new note to the array


            fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function (err) {
                if (err) throw err;
                fs.readFile(path.join(__dirname, "../db/db.json"), 'utf8', function (err, data) {
                    if (err) throw err;
                    return res.json(JSON.parse(data));
                });
            });
        });
    });

    app.delete("/api/notes/:id", function (req, res) {
        console.log(req.params.id, 1);
        console.log("Note " + req.params.id + " deleted.");
        fs.readFile(path.join(__dirname, "../db/db.json"), 'utf8', function (err, data) {
            var notes =JSON.parse(data)
            if (err) throw err;
            
            notes = notes.filter(function(note){
             return note.id != req.params.id;
            });
            
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function (err) {
            if (err) throw err;
                fs.readFile(path.join(__dirname, "../db/db.json"), 'utf8', function (err, data) {
                    if (err) throw err;
                    return res.json(JSON.parse(data));
                });
            });
        });
    });
}