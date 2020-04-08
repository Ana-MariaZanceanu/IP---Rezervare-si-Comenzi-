const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
		min: 6,
	},
	userFirstName: {
		type: String,
		required: true,
		min: 2,
	},
	userLastName: {
		type: String,
		required: true,
		min: 2,
	},
	phoneNumber: {
		type: String,
		required: true,
		min: 7,
		max: 10,
	},
	restaurantId: {
		type: String,
		required: true,
	},
	orderDate: {
		type: Date,
		required: true,
	},
	userDeliveryAdress: {
		type: String,
		required: false,
	},
	userCreditCardId: {
		type: String,
		required: false,
	},
	amount: {
		type: Number,
		required: true,
	},
	guest: {
		type: Boolean,
		required: true,
		default: 'false',
	},
	dishes: {},
});

module.exports = orderSchema;
