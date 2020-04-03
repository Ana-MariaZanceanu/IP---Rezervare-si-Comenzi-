const Logger = require('../loaders/logger');

class ReservationService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async getAllReservations() {
		try {
			const reservations = await this.db.Reservation.find({});

			return { success: true, data: { reservations } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async getReservation(idReservation) {
		try {
			const reservations = await this.db.Reservation.find({
				_id: idReservation,
			});

			return { success: true, data: { reservations } };
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
			reservationDate,
			phoneNumber,
			numberOfSeats,
			restaurantName,
		} = payload;
		const reservationData = {
			email,
			userFirstName,
			userLastName,
			reservationDate,
			phoneNumber,
			numberOfSeats,
			restaurantName,
		};

		const reservation = new this.db.Reservation(reservationData);

		try {
			const existsReservation = await this.db.Reservation.findByData(
				email,
				userFirstName,
				userLastName,
				reservationDate,
				phoneNumber,
				numberOfSeats,
				restaurantName,
			);

			if (!existsReservation) {
				await reservation.save();
			}

			return { success: true, data: { reservation } };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async update(idReservation, payload) {
		try {
			const reservation = await this.db.Reservation.updateOne(
				{ _id: idReservation },
				payload,
			);

			return { success: true, data: { reservation } };
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
			const reservation = await this.db.Reservation.deleteMany(
				{},
			);

			return { success: true, data: { reservation } };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async deleteReservation(idReservation) {
		try {
			const reservation = await this.db.Reservation.deleteOne({
				_id: idReservation,
			});

			return { success: true, data: { reservation } };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = ReservationService;
