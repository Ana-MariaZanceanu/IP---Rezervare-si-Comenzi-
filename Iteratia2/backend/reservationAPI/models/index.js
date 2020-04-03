const User = require('./user/index');
const Reservation = require('./reservation/index');
const userValidationSchema = require('./user/validator');
const reservationValidationSchema = require('./reservation/validator');

module.exports = {
	User,
	userValidationSchema,
	Reservation,
	reservationValidationSchema,
};
