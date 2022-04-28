const express = require('express');
const RegisterControllers = require('./controllers/UsersController')
const PostsControllers = require('./controllers/PostsControllers')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.get('/users', RegisterControllers.index);
routes.post('/users', RegisterControllers.create);

routes.get('/profile', ProfileController.index);

routes.get('/posts', PostsControllers.index);
routes.post('/posts', PostsControllers.create);
routes.delete('/posts/:id', PostsControllers.delete);


module.exports = routes;