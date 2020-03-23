const Chat = require('../models/Chat');
const User = require('../models/User');

module.exports = {
    async buscar(req, res) {
        const { chat_Id } = req.params;

        let chat = await Chat.findOne({ chat_Id });

        return res.json(chat);
    },

    async listar(req, res) {
        const { userOne } = req.query;

        const chat = await Chat.find({ userOne });
        return res.json(chat);
    },

    async criar(req, res) {
        const { userOne } = req.body;
        const { userTwo } = req.body;

        let chat = await Chat.findOne({ userTwo });

        if (!chat) {
            chat = await Chat.create({ userOne, userTwo });
        } else {
            console.log(chat.id);
        }

        return res.json(chat);
    }
};