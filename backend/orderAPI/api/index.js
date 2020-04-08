const { Router } = require('express');

const app = Router();

// Import all the routers
const orderRouter = require('./routes/orderRouter');

// Add all the routers as middlewares
app.use('/orders', orderRouter);

module.exports = app;
