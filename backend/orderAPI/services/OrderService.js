const stripe = require('stripe')(
	'sk_test_6Qtc8kKAPJVEFZ69mObgzgSA00Sej2WCK9',
);

const nodemailer = require('nodemailer');
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

	async submit(req, cartService) {
		const payload = req.body;
		const DbCart = (await cartService.getCart(req.body.userId))
			.data;
		const cart = req.session.cart
			? req.session.cart
			: {
					items: [
						{
							id: '5e9494d0dd757435187a6dc0',
							item: {
								price: 20,
								quantity: 1,
								product: 'Pizza',
							},
						},
					],
					totalPrice: 20,
					totalQty: 1,
			  };
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
			orderData.items = DbCart.cart[0].items;
			orderData.amount = DbCart.cart[0].totalPrice;
		} else {
			orderData.items = cart.items;
			orderData.amount = cart.totalPrice;
		}

		const order = new this.db.Order(orderData);

		try {
			const existsOrder = await this.db.Order.findByData(
				email,
				date,
			);

			if (!existsOrder) {
				if (req.body.paymentMethod === 'card') {
					if (payload.userId) {
						await this.cardPayment(
							DbCart.cart[0],
							req.body.paymentToken,
						);
					} else {
						await this.cardPayment(
							cart,
							req.body.paymentToken,
						);
					}

					await this.sendPaymentMail(orderData);
				}
				await order.save();
				await this.sendOrderMail(orderData);
				if (payload.userId) {
					cartService.deleteCart(payload.userId);
				} else {
					delete req.session.cart;
				}
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

	async sendOrderMail(orderData) {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'restaurantapp20ip@gmail.com',
				pass: 'restaurantapp20!',
			},
		});
		let products = ` `;
		for (let i = 0; i < orderData.items.length; i += 1) {
			products += `<p>nume: ${orderData.items[i].item.product},<br> pret: ${orderData.items[i].item.price},<br> cantitate:${orderData.items[i].item.quantity}<br></p>`;
		}
		const mailOptions = {
			from: 'restaurantapp20ip@gmail.com',
			to: 'andrasimion99@gmail.com',
			subject: 'Confirmare comanda',
			html: `<h2>Comanda a fost plasata cu success!</h2>${products} pret Total: ${orderData.amount} <br>`,
		};

		transporter.sendMail(mailOptions, function (error) {
			if (error) {
				Logger.error(error);
			} else {
				Logger.info(`Order Email sent`);
			}
		});
	}

	async sendPaymentMail(orderData) {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'restaurantapp20ip@gmail.com',
				pass: 'restaurantapp20!',
			},
		});

		const mailOptions = {
			from: 'restaurantapp20ip@gmail.com',
			to: 'andrasimion99@gmail.com',
			subject: 'Confirmare plata',
			html: `<h2>Plata comenzii s-a efectuat cu success!</h2>pret Total: ${orderData.amount} <br>`,
		};

		transporter.sendMail(mailOptions, function (error) {
			if (error) {
				Logger.error(error);
			} else {
				Logger.info(`Payment Email sent`);
			}
		});
	}

	async cardPayment(cart, tokenId) {
		// stripe.tokens.create(
		// 	{
		// 		card: {
		// 			number: '4242424242424242',
		// 			exp_month: 4,
		// 			exp_year: 2021,
		// 			cvc: '314',
		// 		},
		// 	},
		// 	function (err, token) {
		// 		if (err) {
		// 			Logger.error(err);
		// 		} else {
		// 			stripe.charges.create(
		// 				{
		// 					amount: cart.totalPrice * 100,
		// 					currency: 'usd',
		// 					source: token.id,
		// 					description: 'Test Charge',
		// 				},
		// 				function (error) {
		// 					if (error) {
		// 						Logger.error(error);
		// 					} else {
		// 						Logger.info(
		// 							'Payment successfully made.',
		// 						);
		// 					}
		// 				},
		// 			);
		// 		}
		// 	},
		// );
		stripe.charges.create(
			{
				amount: cart.totalPrice * 100,
				currency: 'usd',
				source: tokenId,
				description: 'Test Charge',
			},
			function (error) {
				if (error) {
					Logger.error(error);
				} else {
					Logger.info('Payment successfully made.');
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
