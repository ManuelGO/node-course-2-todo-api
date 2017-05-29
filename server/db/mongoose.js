var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //usar promesas de mongoose...
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
	mongoose
};