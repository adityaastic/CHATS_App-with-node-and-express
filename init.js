;
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");





main()
.then(() => {
console. log("connection successful");
})
.catch((err) => console.log(err));

async function main() {
await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
      from: "neha",
      to: "preeti",
      msg: "send me notes for the exam", // Renamed from 'message' to 'msg'
      created_at: new Date(),
    },
    {
      from: "rohit",
      to: "mohit",
      msg: "teach me JS callbacks",
      created_at: new Date(),
    },
    {
      from: "amit",
      to: "sumit",
      msg: "all the best!",
      created_at: new Date(),
    },
    {
      from: "priya",
      to: "john",
      msg: "How's your day going?",
      created_at: new Date(),
    },
    {
      from: "alex",
      to: "emma",
      msg: "Let's catch up this weekend!",
      created_at: new Date(),
    },
    {
      from: "sara",
      to: "jacob",
      msg: "Have you seen the latest movie?",
      created_at: new Date(),
    },
    {
      from: "vicky",
      to: "lisa",
      msg: "Need help with my computer issue",
      created_at: new Date(),
    },
    {
      from: "david",
      to: "olivia",
      msg: "Planning a road trip, any suggestions?",
      created_at: new Date(),
    },
    {
      from: "chris",
      to: "rachel",
      msg: "Just got a new job, excited!",
      created_at: new Date(),
    },
    { 
      from: "michael",
      to: "emily",
      msg: "Happy birthday! 🎉",
      created_at: new Date(),
    },
    // Add more chat objects as needed
  ];
  

  Chat.insertMany(allChats);