const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//////static files//////
app.use(express.static("css"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/sass", express.static(__dirname + "sass/main.css"));
app.use("/js", express.static(__dirname + "/server.js"));
app.use("/img", express.static(__dirname + "/img"));
// app.use("/css", express.static(__dirname + "sass/main.css"));

///
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

mongoose.connect(
  "mongodb+srv://askotala:Elmesia17@cluster0.0xkzj.mongodb.net/TodoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

//create data schema
const notesSchema = {
  title: String,
  content: String,
};
const Note = mongoose.model("Note", notesSchema);

// app.use(express.static("sass"))
// app.use("/sass",express.static(__dirname + "sass/css"))

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
/////////////////////about us page/////////
// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/views/aboutUs.html");
// });
app.post("/", function (req, res) {
  let newNote = new Note({
    title: req.body.title,
    content: req.body.content,
  });
  newNote.save();
  res.redirect("/");
});

//listen on port 3000

app.listen(3000);