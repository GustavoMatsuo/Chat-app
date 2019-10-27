const Chat = require('../models/Chat');

module.exports = {
    async buscar(req, res) {
        const { chat_Id } = req.params;

        let chat = await Chat.findOne({ chat_Id });

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