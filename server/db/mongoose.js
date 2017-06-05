var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //usar promesas de mongoose...
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
	mongoose
};

