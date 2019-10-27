const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    chat_id: String,
    user_id: String,
    reply: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Message', MessageSchema);