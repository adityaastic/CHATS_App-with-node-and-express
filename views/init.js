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
      message: "send me notes for the exam",
      created_at: new Date(),
    },
    {
      from: "rohit",
      to: "mohit",
      message: "teach me JS callbacks",
      created_at: new Date(),
    },
    {
      from: "amit",
      to: "sumit",
      message: "all the best!",
      created_at: new Date(),
    },
    {
      from: "priya",
      to: "john",
      message: "How's your day going?",
      created_at: new Date(),
    },
    {
      from: "alex",
      to: "emma",
      message: "Let's catch up this weekend!",
      created_at: new Date(),
    },
    {
      from: "sara",
      to: "jacob",
      message: "Have you seen the latest movie?",
      created_at: new Date(),
    },
    {
      from: "vicky",
      to: "lisa",
      message: "Need help with my computer issue",
      created_at: new Date(),
    },
    {
      from: "david",
      to: "olivia",
      message: "Planning a road trip, any suggestions?",
      created_at: new Date(),
    },
    {
      from: "chris",
      to: "rachel",
      message: "Just got a new job, excited!",
      created_at: new Date(),
    },
    {
      from: "michael",
      to: "emily",
      message: "Happy birthday! 🎉",
      created_at: new Date(),
    },
    // Add more chat objects as needed
  ];
  
  Chat.insertMany(allChats);
 
