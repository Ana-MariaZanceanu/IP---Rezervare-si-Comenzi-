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

	async submit(payload) {
		const {
			email,
			userFirstName,
			userLastName,
			phoneNumber,
			restaurantId,
			userDeliveryAdress,
			userCreditCardId,
			amount,
			dishes,
		} = payload;
		const date = new Date();
		// set Romania hour
		date.setHours(date.getHours() + 3);
		const orderData = {
			email,
			userFirstName,
			userLastName,
			phoneNumber,
			restaurantId,
			userDeliveryAdress,
			userCreditCardId,
			amount,
			dishes,
		};
		orderData.orderDate = date;
		const order = new this.db.Order(orderData);

		try {
			const existsOrder = await this.db.Order.findByData(
				email,
				userFirstName,
				userLastName,
				phoneNumber,
				restaurantId,
				date,
			);

			if (!existsOrder) {
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
