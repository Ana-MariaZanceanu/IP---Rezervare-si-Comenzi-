const { Joi } = require('celebrate');
// const joiObjectId = require('joi-objectid');

// // add joi-objectId to Joi
// Joi.objectId = joiObjectId(Joi);

const orderSchema = Joi.object().keys({
	email: Joi.string()
		.email()
		.required()
		.error(new Error('Email required')),
	userFirstName: Joi.string()
		.required()
		.min(2)
		.error(new Error('First name required')),
	userLastName: Joi.string()
		.required()
		.min(2)
		.error(new Error('Last name required')),
	phoneNumber: Joi.string()
		.required()
		.trim()
		.regex(/^[0-9]{7,10}$/)
		.error(new Error('Phone Number required')),
	restaurantId: Joi.string()
		.required()
		.error(new Error('Restaurant name required')),
	userDeliveryAdress: Joi.string().error(
		new Error('Adress invalid'),
	),
	userCreditCardId: Joi.string()
		.creditCard()
		.error(new Error('Credit Card invalid')),
	amount: Joi.number()
		.positive()
		.greater(1)
		.precision(2)
		.required()
		.error(new Error('Amount invalid')),
	dishes: Joi.object()
		.required()
		.error(new Error('Dished invalid')),
});

module.exports = orderSchema;
