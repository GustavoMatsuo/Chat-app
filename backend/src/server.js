const express = require('express');
const mongoose = require('mongoose');

const authMiddleware = require("../src/middlewares/auth");
const cors = require('cors');

mongoose.connect('mongodb://user:12345@cluster0-shard-00-00-dkus1.mongodb.net:27017,cluster0-shard-00-01-dkus1.mongodb.net:27017,cluster0-shard-00-02-dkus1.mongodb.net:27017/blue?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(authMiddleware);

const server = app.listen(5000, function () {
    console.log("Express server listening on port " + server.address()["port"]);
});