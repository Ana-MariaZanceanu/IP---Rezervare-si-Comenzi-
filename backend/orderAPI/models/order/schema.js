const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
	userId: {
		type: mongoose.Types.ObjectId,
		required: false,
		validate: {
			validator(value) {
				// verificam daca user-ul chiar exista
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
	paymentMethod: {
		type: String,
		required: true,
		enum: ['card', 'cash'],
		default: 'cash',
	},
	amount: {
		type: Number,
		min: 1,
		required: true,
	},
	guest: {
		type: Boolean,
		required: true,
		default: 'true',
	},
	items: [
		{
			id: {
				type: mongoose.Types.ObjectId,
				required: true,
				validate: {
					validator(value) {
						// verificam daca restaurantul chiar exista
						return true;
					},
					message: 'Item id not valid',
				},
			},
			item: {
				price: { type: Number, required: true, min: 1 },
				quantity: { type: Number, required: true, min: 1 },
				product: { type: String, required: true },
			},
		},
	],
});

module.exports = orderSchema;
