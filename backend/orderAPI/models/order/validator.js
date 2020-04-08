const { Joi } = require('celebrate');

const orderSchema = Joi.object().keys({
	userId: Joi.string()
		.regex(/^[a-fA-F0-9]{24}$/)
		.error(new Error('User id invalid')),
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
		.regex(/^[a-fA-F0-9]{24}$/)
		.required()
		.error(new Error('Restaurant id invalid')),
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
	dishes: Joi.array()
		.items(
			Joi.object()
				.keys({
					dishId: Joi.string()
						.required()
						.regex(/^[a-fA-F0-9]{24}$/),
					quantity: Joi.number().positive().min(1),
				})
				.required(),
		)
		.required()
		.error(new Error('Dished invalid')),
});

module.exports = orderSchema;
