const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    user_id: String,
    friend: String
});

module.exports = mongoose.model('Contact', ContactSchema);