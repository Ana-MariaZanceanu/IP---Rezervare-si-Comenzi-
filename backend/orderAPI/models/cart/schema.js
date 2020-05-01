const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
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
	modifiedDate: {
		type: Date,
		required: true,
	},
	totalQuantity: {
		type: Number,
		min: 1,
		required: true,
	},
	totalPrice: {
		type: Number,
		min: 1,
		required: true,
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

module.exports = cartSchema;
