const { Router } = require('express');
const { celebrate } = require('celebrate');
const { favoriteService } = require('../../services/index');
const { favoriteValidationSchema } = require('../../models/index');

const router = Router();

const BAD_REQUEST = 400;
const OK = 200;
const CREATED = 201;
// Here we have all the controllers

router.get('/', async (req, res) => {
	const result = await favoriteService.getAllFavoriteProducts();
	const statusCode = result.success ? OK : BAD_REQUEST;

	res.status(statusCode).json(result);
});

router.get('/:idUser', async (req, res) => {
	const result = await favoriteService.getFavoriteProducts(
		req.params.idUser,
	);
	const statusCode = result.success ? OK : BAD_REQUEST;

	res.status(statusCode).json(result);
});

router.post(
	'/add-product/:idProduct',
	celebrate({ body: favoriteValidationSchema }),
	async function (req, res) {
		const result = await favoriteService.addInFavoriteList(
			req.body,
			req.params.idProduct,
		);
		const statusCode = result.success ? CREATED : BAD_REQUEST;

		res.status(statusCode).json(result);
	},
);

router.delete(
	'/delete-product/:idProduct',
	celebrate({ body: favoriteValidationSchema }),
	async function (req, res) {
		const result = await favoriteService.deleteFromFavoriteList(
			req.body,
			req.params.idProduct,
		);
		const statusCode = result.success ? OK : BAD_REQUEST;

		res.status(statusCode).json(result);
	},
);

router.delete('/all', async (req, res) => {
	const result = await favoriteService.deleteAll();
	const statusCode = result.success ? OK : BAD_REQUEST;

	res.status(statusCode).json(result);
});

module.exports = router;

// All the results must have the next format
// { success: false, error } - if an error was thrown
// { success: true, data } - if all was good
// error -> an object containing the error
// data -> an object containing all the data that you're giving back as a response
