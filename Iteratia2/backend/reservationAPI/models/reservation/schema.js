const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
		min: 6,
	},
	userFirstName: {
		type: String,
		required: true,
	},
	userLastName: {
		type: String,
		required: true,
	},
	reservationDate: {
		type: Date,
		required: true,
	},
});

module.exports = reservationSchema;
