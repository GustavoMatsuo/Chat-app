const User = require('../models/User');
const Contact = require('../models/Contact');

module.exports = {
    async listar(req,res) {
        const { user_id } = req.query;
        
        const contacts = await Contact.find({ user_id });


        return res.json(contacts);
    },

    async listar(req,res) {
        const { user_id } = req.query;
        
        const contacts = await Contact.find({ user_id });


        return res.json(contacts);
    },

    async adicionar(req, res) {
        const { user_id } = req.body;
        const { email } = req.body;
    
        let friend = await User.findOne({ email });

        const contact = await Contact.create({
            user_id,
            friend: friend.id
        });

        return res.json(contact);
    }
};