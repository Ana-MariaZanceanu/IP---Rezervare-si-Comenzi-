/* eslint-disable no-restricted-syntax */
/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
// const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
const Logger = require('../loaders/logger');

class FavoriteService {
	constructor({ db, services }) {
		this.db = db;
		this.services = services;
	}

	async getProduct(idProduct) {
		let product;
		await fetch(`http://localhost:4000/api/courses/${idProduct}`)
			.then((response) => response.json())
			.then(async function (data) {
				// eslint-disable-next-line prefer-destructuring
				product = data.data[0];
			})
			.catch((err) => {
				Logger.error(err);
			});
		return product;
	}

	async deleteFromFavoriteList(payload, idProduct) {
		let storedItem;
		const { userId } = payload;
		const userExists = await this.db.Favorite.findOne({
			userId,
		});

		if (userExists) {
			storedItem = userExists.items.find(function (elem) {
				return elem == idProduct;
			});
			if (storedItem) {
				userExists.items.splice(
					// eslint-disable-next-line no-underscore-dangle
					userExists.items.indexOf(storedItem._id),
					1,
				);
				userExists.save();
				return { success: true, data: { userExists } };
			}
			return {
				success: false,
				mesaj: 'Produsul nu exista in lista de favorite',
			};
			// eslint-disable-next-line no-else-return
		} else {
			return {
				success: false,
				mesaj: 'Utilizatorul nu exista',
			};
		}
	}

	async addInFavoriteList(payload, idProduct) {
		let storedItem;
		const { userId } = payload;
		const items = [];
		const list = {
			userId,
			items,
		};

		const storedProduct = await this.getProduct(idProduct);

		try {
			if (storedProduct) {
				const userExists = await this.db.Favorite.findOne({
					userId,
				});
				if (userExists) {
					storedItem = userExists.items.find(function (
						elem,
					) {
						// eslint-disable-next-line no-underscore-dangle
						return elem == storedProduct._id;
					});
					if (!storedItem) {
						// eslint-disable-next-line no-underscore-dangle
						userExists.items.push(storedProduct._id);
						userExists.save();
						return {
							success: true,
							data: { userExists },
						};
						// eslint-disable-next-line no-else-return
					} else {
						return {
							success: false,
							data: {
								mesaj:
									'Produsul exista deja in lista de favorite.',
								userExists,
							},
						};
					}
				} else {
					list.items.push(storedProduct._id);
					const listObject = new this.db.Favorite(list);
					listObject.save();
					return { success: true, data: { listObject } };
				}
			} else {
				return {
					success: false,
					mesaj: 'Produsul nu exista in baza de date',
				};
			}
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async getAllFavoriteProducts() {
		try {
			const favorites = await this.db.Favorite.find({});

			return { success: true, data: { favorites } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async getFavoriteProducts(idUser) {
		try {
			const favorites = await this.db.Favorite.find({
				userId: idUser,
			});

			return { success: true, data: { favorites } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async deleteAll() {
		try {
			const favorites = await this.db.Favorite.deleteMany({});

			return { success: true, data: { favorites } };
		} catch (error) {
			Logger.error(error);
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = FavoriteService;
