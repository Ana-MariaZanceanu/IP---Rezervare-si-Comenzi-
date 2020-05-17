const request = require('supertest');
const { describe, it } = require('mocha');
const express = require('express');
const assert = require('assert');
const chai = require('chai');

const expect = chai.expect;

const url = 'http://localhost:3100/api/v1';

describe('/reservations ROUTES', function () {
	this.timeout(5000);
	it('GET /reservations route works', (done) => {
		request(url)
			.get('/reservations')
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function (err, res) {
				if (err) return done(err);
				expect(res.body.success).to.equal(true);
				expect(res.body.data.orders).to.be.a('array');
				done();
			});
	});

	it("GET /reservations when id doesn't exist", (done) => {
		request(url)
			.get('/reservations/1')
			.expect('Content-Type', /json/)
			.expect(400)
			.end(function (err, res) {
				if (err) return done(err);
				expect(res.body.success).to.equal(false);
				done();
			});
	});
});
