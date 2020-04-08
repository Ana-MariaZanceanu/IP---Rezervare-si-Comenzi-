const findByData = async function (
	email,
	userFirstName,
	userLastName,
	reservationDate,
	phoneNumber,
	numberOfSeats,
	restaurantId,
) {
	const reservation = await this.findOne({
		email,
		userFirstName,
		userLastName,
		reservationDate,
		phoneNumber,
		numberOfSeats,
		restaurantId,
	});

	if (reservation) {
		throw new Error('Reservation already exists.');
	}

	return reservation;
};

const validateDate = async function (reservationDate) {
	const date = new Date();
	date.setHours(date.getHours() + 3);
	if (reservationDate < date) {
		throw new Error('Reservation date invalid.');
	}
};

module.exports = {
	findByData,
	validateDate,
};
