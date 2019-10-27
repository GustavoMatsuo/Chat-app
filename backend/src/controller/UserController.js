const User = require('../models/User'); 
const func = require('../config/functions');

module.exports = {
    async buscar(req, res) {
        const { user_id } = req.query;

        const user = await User.findById({ _id: user_id });

        return res.json(user);

    },

    async criar(req, res) {
        const { username } = req.body;
        const { email } = req.body;
        const { password } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ username, email, password });
        } else {
            console.log('Já existe');
        }


        res.send({
            user,
            token: func.generateToken({ id: user.id }),
        });
    }
};