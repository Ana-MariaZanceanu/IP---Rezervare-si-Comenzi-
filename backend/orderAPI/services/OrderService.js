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
			userId,
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

		const orderData = {
			userId,
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
		const date = new Date();
		date.setHours(date.getHours() + 3);
		orderData.orderDate = date;
		if (payload.userId) {
			orderData.guest = false;
		}

		const order = new this.db.Order(orderData);

		try {
			const existsOrder = await this.db.Order.findByData(
				email,
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
