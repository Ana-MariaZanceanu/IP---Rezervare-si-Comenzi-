const request = require('supertest');
const { describe, it } = require('mocha');
// const { expect } = require('chai');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const assert = require('assert');
const express = require('express');
const config = require('../../config');

const app = express();
const orderRouter = require('../../api/routes/orderRouter');
const apiRouter = require('../../api/index');

const url = 'http://localhost:3000/api/v1';

describe('/orders ROUTES', function () {
	this.timeout(5000);
	it('GET /orders route works', (done) => {
		// console.log(app._router.stack);
		// console.log(orderRouter.stack[0].route);
		request(url)
			.get('/orders')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});

	it("GET /orders when id doesn't exist", (done) => {
		request(url)
			.get('/orders/1')
			.expect('Content-Type', /json/)
			.expect(400, done);
	});

	it('POST /orders route works', (done) => {
		request(url)
			.post('/orders')
			.send({
				email: 'test@yahoo.com',
				userFirstName: 'Test',
				userLastName: 'Test',
				phoneNumber: '2341341227',
				restaurantId: '5eb16d673a637d28884dc226',
				paymentMethod: 'cash',
				userDeliveryAdress: 'Str. Palat 10',
			})
			.expect('Content-Type', /json/)
			.expect(201, done);
	});

	it('POST /orders when data is not valid', (done) => {
		request(url)
			.post('/orders')
			.send({
				email: 'rffd',
				userFirstName: '',
				userLastName: '',
				phoneNumber: '2',
				restaurantId: '5e',
				paymentMethod: 'ca',
				userDeliveryAdress: '45r3',
			})
			.expect('Content-Type', /json/)
			.expect(400, done);
	});
});

// describe('unit testing /orders/', function () {
// 	it('should return OK status', function (done) {
// 		chai.request(app)
// 			.get('/')
// 			.end((err, res) => {
// 				if (err) {
// 					console.log('aici: ', err);
// 				}
// 				console.log(res.body);
// 				res.should.have.status(200);
// 				done();
// 			});
// 		// .then(function (res) {
// 		// 	console.log(res);
// 		// 	res.should.have.status(200);
// 		// 	done();
// 		// });
// 	});

// 	// it('should return an array', function (done) {
// 	// 	chai.request(app)
// 	// 		.get('/')
// 	// 		.then(function (res) {
// 	// 			res.body.should.be.a('array');
// 	// 		});
// 	// 	done();
// 	// });
// });
