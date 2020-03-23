const express = require('express');

const UserController = require('./controller/UserController');
const ChatController = require('./controller/ChatController');
const MessageController = require('./controller/MessageController')
const ContactController = require('./controller/ContactController');
const AuthController = require('./controller/AuthController');

const routes = express.Router();

//User
routes.post('/user', UserController.criar);
routes.get('/user', UserController.buscar);

//Chat
routes.post('/chat', ChatController.criar);
routes.get('/chat', ChatController.listar);

//Message
routes.post('/message', MessageController.criar);
routes.get('/message', MessageController.listar);

//Contact
routes.post('/contact', ContactController.adicionar);
routes.get('/contact', ContactController.listar);

//Auth
routes.post('/auth', AuthController.authenticate);

module.exports = routes;