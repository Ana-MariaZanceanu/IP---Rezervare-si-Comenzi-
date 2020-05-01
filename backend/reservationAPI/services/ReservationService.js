const nodemailer = require('nodemailer');
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
			userId,
			email,
			userFirstName,
			userLastName,
			reservationDate,
			phoneNumber,
			numberOfSeats,
			restaurantId,
		} = payload;

		const reservationData = {
			userId,
			email,
			userFirstName,
			userLastName,
			reservationDate,
			phoneNumber,
			numberOfSeats,
			restaurantId,
		};

		if (payload.userId) {
			reservationData.guest = false;
		}

		const reservation = new this.db.Reservation(reservationData);

		try {
			const existsReservation = await this.db.Reservation.findByData(
				email,
				reservationDate,
			);

			if (!existsReservation) {
				await reservation.save();
				await this.sendReservationMail(reservationData);
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

	async sendReservationMail(reservationData) {
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
			subject: 'Confirmare rezervare',
			html: `<h2>Rezervarea a fost inregistrata cu success!</h2> Ora rezervarii: ${reservationData.reservationDate} <br> Numar de locuri: ${reservationData.numberOfSeats}`,
		};

		transporter.sendMail(mailOptions, function (error) {
			if (error) {
				Logger.error(error);
			} else {
				Logger.info(`Reservation Email sent`);
			}
		});
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
