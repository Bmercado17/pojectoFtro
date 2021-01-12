const express = require ("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");


//static files
app.use(express.static("sass"))
app.use("/main.scss", express.static(__dirname + "sass/main.scss"))

app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://askotala:XXXXXXX@cluster0.0xkzj.mongodb.net/TodoApp", 
   { useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
 });


//create data schema
 const notesSchema = {
          title: String,
          content: String 

 }
 const Note = mongoose.model("Note", notesSchema);

// app.use(express.static("sass"))
// app.use("/sass",express.static(__dirname + "sass/css"))

app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html")
    });
app.post("/", function(req,res){
    let newNote = new Note ({
        title: req.body.title,
        content: req.body.content
    });
    newNote.save()
    res.redirect("/");
})

//listen on port 3000

app.listen(3000)