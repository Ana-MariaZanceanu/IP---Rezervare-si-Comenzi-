// Import all the users models
const db = require('../models/index');

// Import all the service constructors
const OrderService = require('./OrderService');

// Create the service objects with dependencies
const orderService = new OrderService({
	db: {
		Order: db.Order,
	},
	services: {},
});

// Export the service object
module.exports = {
	orderService,
};
