const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
    userOne: String,
    userTwo: String,
});

module.exports = mongoose.model('Chat', ChatSchema);