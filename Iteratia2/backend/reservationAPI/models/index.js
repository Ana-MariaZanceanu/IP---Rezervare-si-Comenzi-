const User = require('./user/index');
const Reservation = require('./reservation/index');
const userValidationSchema = require('./user/validator');

module.exports = {
	User,
	userValidationSchema,
	Reservation,
};
