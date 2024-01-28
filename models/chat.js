const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  msg: {
    type: String,
    maxLength: 50,
  },
  created_at: {
    type: Date,
    required: true,
  }, 
});

// Create a model from the schema
const Chat = mongoose.model("Chat", chatSchema);

// Export the model
module.exports = Chat;
