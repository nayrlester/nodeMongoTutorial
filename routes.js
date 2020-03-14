const _ = require('lodash');
const user = require('./controller/users');
const User = require('./models/user')

module.exports = function(app,io){

	app.get('/user', user.user);
	app.get('/user/:id', user.getUser);
	app.post('/user', user.createUser);
	app.delete('/user/:id', user.deleteUser);
	app.put('/user/:id', user.updateUser);
}