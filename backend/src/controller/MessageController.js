const Message = require('../models/Message');

module.exports = {
    async listar(req, res) {
        const { chat_id } = req.query;

        const messages = await Message.find({ chat_id });

        return res.json(messages);
    },

    async criar(req, res) {
        const { chat_id } = req.body;
        const { user_id } = req.body;
        const { reply } = req.body;
        //const { date } = req.body;

        const message = await Message.create({
            chat_id,
            user_id,
            reply
        })

        return res.json(message);
    }
};