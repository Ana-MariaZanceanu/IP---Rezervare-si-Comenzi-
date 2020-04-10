const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	userId: {
		type: mongoose.Types.ObjectId,
		required: false,
		validate: {
			validator(value) {
				// verificam daca user-ul chiar exista
				console.log(value);
				return true;
			},
			message: 'User id not valid',
		},
	},
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
		type: mongoose.Types.ObjectId,
		required: true,
		validate: {
			validator(value) {
				// verificam daca restaurantul chiar exista
				console.log(value);
				return true;
			},
			message: 'Restaurant id not valid',
		},
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
		default: 'true',
	},
	dishes: [
		{
			dishId: {
				type: mongoose.Types.ObjectId,
				validate: {
					validator(value) {
						// verificam daca restaurantul chiar exista
						console.log(value);
						return true;
					},
					message: 'Dish id not valid',
				},
			},
			quantity: Number,
		},
	],
});

module.exports = orderSchema;
