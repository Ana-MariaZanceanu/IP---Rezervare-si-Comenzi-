// Import all the users models
const db = require('../models/index');

// Import all the service constructors
const OrderService = require('./OrderService');
const CartService = require('./CartService');

// Create the service objects with dependencies
const orderService = new OrderService({
	db: {
		Order: db.Order,
	},
	services: {},
});

const cartService = new CartService({
	services: {},
});

// Export the service object
module.exports = {
	orderService,
	cartService,
};
