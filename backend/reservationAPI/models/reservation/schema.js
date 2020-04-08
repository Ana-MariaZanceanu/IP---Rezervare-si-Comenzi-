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
		min: 2,
	},
	userLastName: {
		type: String,
		required: true,
		min: 2,
	},
	reservationDate: {
		type: Date,
		required: true,
	},
	phoneNumber: {
		type: String,
		required: true,
		min: 7,
		max: 10,
	},
	numberOfSeats: {
		type: Number,
		required: true,
		min: 1,
	},
	restaurantId: {
		type: String,
		required: true,
	},
});

module.exports = reservationSchema;
