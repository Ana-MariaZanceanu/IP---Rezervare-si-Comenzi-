const { Router } = require('express');
const { cartService } = require('../../services/index');

const router = Router();

const BAD_REQUEST = 400;
const OK = 200;
// Here we have all the controllers
router.get('/add-product/:idProduct', async (req, res) => {
	console.log(req.sessionID);
	const result = await cartService.addProduct(
		req.params.idProduct,
		req.session.cart ? req.session.cart : {},
	);
	console.log(result);
	req.session.cart = result.data.cart;
	console.log(req.session.cart);
	const statusCode = result.success ? OK : BAD_REQUEST;

	res.status(statusCode).json(result);
});

module.exports = router;
