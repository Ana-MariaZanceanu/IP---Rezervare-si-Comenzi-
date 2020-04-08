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
		throw new Error('Rezervation already exists.');
	}

	return reservation;
};

module.exports = {
	findByData,
};
