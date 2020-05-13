const { Router } = require('express');
const { celebrate } = require('celebrate');
const { reservationService } = require('../../services/index');
const { status } = require('../config/index');

const { reservationValidationSchema } = require('../../models/index');

const router = Router();

// Here we have all the controllers
router.get('/', async (req, res) => {
	const result = await reservationService.getAllReservations();
	const statusCode = result.success
		? status.OK
		: status.BAD_REQUEST;

	res.status(statusCode).json(result);
});

router.get('/:idReservation', async (req, res) => {
	const result = await reservationService.getReservation(
		req.params.idReservation,
	);
	const statusCode = result.success
		? status.OK
		: status.BAD_REQUEST;

	res.status(statusCode).json(result);
});

router.post(
	'/',
	celebrate({
		body: reservationValidationSchema,
	}),
	async function (req, res) {
		const result = await reservationService.submit(req.body);
		const statusCode = result.success
			? status.CREATED
			: status.BAD_REQUEST;

		res.status(statusCode).json(result);
	},
);

router.patch('/:idReservation', async function (req, res) {
	const result = await reservationService.update(
		req.params.idReservation,
		req.body,
	);
	const statusCode = result.success
		? status.ACCEPTED
		: status.BAD_REQUEST;

	res.status(statusCode).json(result);
});

router.delete('/all', async (req, res) => {
	const result = await reservationService.deleteAll();
	const statusCode = result.success ? status.OK : status.NO_CONTENT;

	res.status(statusCode).json(result);
});

router.delete('/:idReservation', async (req, res) => {
	const result = await reservationService.deleteReservation(
		req.params.idReservation,
	);
	const statusCode = result.success ? status.OK : status.NO_CONTENT;

	res.status(statusCode).json(result);
});

module.exports = router;

// All the results must have the next format
// { success: false, error } - if an error was thrown
// { success: true, data } - if all was good
// error -> an object containing the error
// data -> an object containing all the data that you're giving back as a response
