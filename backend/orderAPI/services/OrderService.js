const stripe = require('stripe')(
	'sk_test_6Qtc8kKAPJVEFZ69mObgzgSA00Sej2WCK9',
);
const Logger = require('../loaders/logger');

class OrderService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async getAllOrders() {
		try {
			const orders = await this.db.Order.find({});

			return { success: true, data: { orders } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async getOrder(idOrder) {
		try {
			const orders = await this.db.Order.find({
				_id: idOrder,
			});

			return { success: true, data: { orders } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async submit(req) {
		const payload = req.body;
		const { cart } = req.session;
		const {
			userId,
			email,
			userFirstName,
			userLastName,
			phoneNumber,
			restaurantId,
			userDeliveryAdress,
			paymentMethod,
		} = payload;

		const orderData = {
			userId,
			email,
			userFirstName,
			userLastName,
			phoneNumber,
			restaurantId,
			userDeliveryAdress,
			paymentMethod,
		};
		const date = new Date();
		date.setHours(date.getHours() + 3);
		orderData.orderDate = date;
		if (payload.userId) {
			orderData.guest = false;
		}
		orderData.items = cart.items;
		orderData.amount = cart.totalPrice;

		const order = new this.db.Order(orderData);

		try {
			const existsOrder = await this.db.Order.findByData(
				email,
				date,
			);

			if (!existsOrder) {
				if (req.body.paymentMethod === 'card') {
					await this.cardPayment(req.session.cart);
				}
				await order.save();
			}

			return { success: true, data: { order } };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async cardPayment(cart) {
		stripe.tokens.create(
			{
				card: {
					number: '4242424242424242',
					exp_month: 4,
					exp_year: 2021,
					cvc: '314',
				},
			},
			function (err, token) {
				if (err) {
					Logger.error(err);
				} else {
					stripe.charges.create(
						{
							amount: cart.totalPrice * 100,
							currency: 'usd',
							source: token.id,
							description: 'Test Charge',
						},
						function (error) {
							if (error) {
								Logger.error(error);
							} else {
								Logger.info(
									'Payment successfully made.',
								);
							}
						},
					);
				}
			},
		);
	}

	async deleteAll() {
		try {
			const order = await this.db.Order.deleteMany({});

			return { success: true, data: { order } };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async deleteOrder(idOrder) {
		try {
			const order = await this.db.Order.deleteOne({
				_id: idOrder,
			});

			return { success: true, data: { order } };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = OrderService;
