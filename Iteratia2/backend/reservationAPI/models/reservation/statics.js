const findByData = async function (
	email,
	userFirstName,
	userLastName,
	reservationDate,
	phoneNumber,
	numberOfSeats,
	restaurantName,
) {
	const reservation = await this.findOne({
		email,
		userFirstName,
		userLastName,
		reservationDate,
		phoneNumber,
		numberOfSeats,
		restaurantName,
	});

	if (reservation) {
		throw new Error('Rezervation already exists.');
	}

	return reservation;
};

module.exports = {
	findByData,
};
