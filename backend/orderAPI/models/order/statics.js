const findByData = async function (
	email,
	userFirstName,
	userLastName,
	phoneNumber,
	restaurantId,
	date,
) {
	const order = await this.findOne({
		email,
		userFirstName,
		userLastName,
		phoneNumber,
		restaurantId,
		date,
	});

	if (order) {
		throw new Error('Order already exists.');
	}

	return order;
};

module.exports = {
	findByData,
};
