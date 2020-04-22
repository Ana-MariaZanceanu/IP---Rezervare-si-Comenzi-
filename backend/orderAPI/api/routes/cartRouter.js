const { Router } = require('express');
const { cartService } = require('../../services/index');

const router = Router();

const BAD_REQUEST = 400;
const OK = 200;
// Here we have all the controllers
router.get('/', async (req, res) => {
	const result = {
		success: true,
		data: req.session.cart ? req.session.cart : 'empty cart',
	};

	res.status(OK).json(result);
});

router.get('/clear', async (req, res) => {
	delete req.session.cart;

	res.status(OK).json({ success: true, data: 'Cart cleared' });
});

router.get('/add-product/:idProduct', async (req, res) => {
	const result = await cartService.addProduct(
		req.params.idProduct,
		req.session.cart ? req.session.cart : {},
	);
	req.session.cart = result.data.cart;
	const statusCode = result.success ? OK : BAD_REQUEST;

	res.status(statusCode).json(result);
});

router.get('/add-quantity/:idProduct', async (req, res) => {
	const result = await cartService.addQuantity(
		req.params.idProduct,
		req.session.cart ? req.session.cart : {},
	);
	console.log(req.session.cart);
	console.log(result.data.cart);
	req.session.cart = result.data.cart;
	const statusCode = result.success ? OK : BAD_REQUEST;

	res.status(statusCode).json(result);
});

router.get('/substract-quantity/:idProduct', async (req, res) => {
	const result = await cartService.substractQuantity(
		req.params.idProduct,
		req.session.cart ? req.session.cart : {},
	);
	req.session.cart = result.data.cart;
	const statusCode = result.success ? OK : BAD_REQUEST;

	res.status(statusCode).json(result);
});

router.get('/delete-product/:idProduct', async (req, res) => {
	const result = await cartService.deleteProduct(
		req.params.idProduct,
		req.session.cart ? req.session.cart : {},
	);
	req.session.cart = result.data.cart;
	const statusCode = result.success ? OK : BAD_REQUEST;

	res.status(statusCode).json(result);
});

module.exports = router;
