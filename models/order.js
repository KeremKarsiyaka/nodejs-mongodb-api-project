const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
	items: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'post'
	}],
	dateOfOrder: {
		type: Date,
		default: Date.now()
	},
	username: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'auth'
	}
});
	


module.exports = mongoose.model('order', OrderSchema)