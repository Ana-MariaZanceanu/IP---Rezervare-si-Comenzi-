const mongoose = require('mongoose');

const favoriteSchema = mongoose.Schema({
	userId: {
		type: mongoose.Types.ObjectId,
		required: true,
	},
	items: [
		{
			type: mongoose.Types.ObjectId,
			required: false,
		},
	],
});

module.exports = favoriteSchema;
