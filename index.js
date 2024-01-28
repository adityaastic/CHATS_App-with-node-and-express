const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const { get } = require("http");
const methodOverride = require('method-override');



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
.then(() => {
console. log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// index Route
app.get("/chats", async(req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});
 
// new Route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// create Route
app.post('/chats/new', (req, res) => {
    // Handle form submission logic here
    let { from, to, msg } = req.body;
  
    // Assuming 'chats' is a MongoDB model
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date()
    });

    newChat.save()
      .then(() => {
        res.redirect('/chats'); // Redirect to the main chat page
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
      });
});

// ...

// edit Route
app.get("/chats/:id/edit", async (req, res) => {
    try {
        const chat = await Chat.findById(req.params.id);
        res.render("edit.ejs", { chat });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// Update Route
app.put("/chats/:id", async (req, res) => {
    try {
        let { id } = req.params;
        let { msg : newMsg } = req.body;

        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            { msg: newMsg },
            { runValidators: true, new: true }
        );
         
        console.log(updatedChat);
        res.redirect("/chats");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

// delete button
app.delete("/chats/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Chat.findByIdAndDelete(id);
        res.redirect("/chats");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});


app.get("/", (req, res) => {
res.send("working root");
});

app.listen(8080, () => {
console. log("app is listening");

});