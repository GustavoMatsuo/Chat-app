const User = require('../models/User');

const func = require('../config/functions');

module.exports = {
    async authenticate(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select('+password');

        if (!user)
            return res.status(400).send({ error: 'User not found' });

        if (!password == user.password)
            return res.status(400).send({ error: 'Invalid password' });

        user.password = undefined;



        res.send({
            user,
            token: func.generateToken({ id: user.id }),
        });
    },

}