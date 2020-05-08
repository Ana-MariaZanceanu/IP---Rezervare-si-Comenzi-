const mongoose = require('mongoose');

const favoriteSchema = mongoose.Schema({
	userId: {
		type: mongoose.Types.ObjectId,
		required: false,
	},
	items: [
		{
			id: {
				type: mongoose.Types.ObjectId,
				required: true,
			},
			item: {
				price: { type: Number, required: true, min: 1 },
				product: { type: String, required: true },
			},
		},
	],
});

module.exports = favoriteSchema;
