// Import all the users models
// const { User } = require('../models/index');
const db = require('../models/index');

// Import all the service constructors
const UserService = require('./UserService');
const ReservationService = require('./ReservationService');

// Create the service objects with dependencies
const userService = new UserService({
	db: {
		User: db.User,
	},
	services: {},
});

const reservationService = new ReservationService({
	db: {
		Reservation: db.Reservation,
	},
	services: {},
});

// Export the service object
module.exports = {
	userService,
	reservationService,
};
