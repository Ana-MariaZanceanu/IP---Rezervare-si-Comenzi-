/* eslint-disable no-param-reassign */

class CartService {
	constructor({ services }) {
		this.services = services;
	}

	async addProduct(idProduct, cart) {
		let storedItem;
		try {
			if (Object.keys(cart).length === 0) {
				cart.items = [];
				cart.totalPrice = 0;
				cart.totalQty = 0;
			}
			storedItem = cart.items.find((elem) => {
				return elem.id === idProduct;
			});
			if (!storedItem) {
				storedItem = {
					id: idProduct,
					item: {
						price: 20,
						quantity: 1,
						product: 'Pizza',
					},
				};
				cart.items.push(storedItem);
			} else {
				if (
					cart.items[cart.items.indexOf(storedItem)].item
						.quantity === 100
				) {
					return {
						success: false,
						data: {
							mesaj:
								'Cantitatea maxima a prdusului comandat este de 100.',
							cart,
						},
					};
				}
				storedItem.item.quantity += 1;
			}
			cart.totalPrice += storedItem.item.price;
			cart.totalQty += 1;

			return { success: true, data: { cart } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async addQuantity(idProduct, cart) {
		let storedItem;
		try {
			storedItem = cart.items.find((elem) => {
				return elem.id === idProduct;
			});

			if (storedItem) {
				if (
					cart.items[cart.items.indexOf(storedItem)].item
						.quantity === 100
				) {
					return {
						success: false,
						data: {
							mesaj:
								'Cantitatea maxima a prdusului comandat este de 100.',
							cart,
						},
					};
				}
				cart.items[
					cart.items.indexOf(storedItem)
				].item.quantity += 1;
				cart.totalQty += 1;
				cart.totalPrice += storedItem.item.price;
			}

			return { success: true, data: { cart } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async substractQuantity(idProduct, cart) {
		let storedItem;
		try {
			storedItem = cart.items.find((elem) => {
				return elem.id === idProduct;
			});

			if (storedItem) {
				cart.items[
					cart.items.indexOf(storedItem)
				].item.quantity -= 1;
				cart.totalQty -= 1;
				cart.totalPrice -= storedItem.item.price;
				if (
					cart.items[cart.items.indexOf(storedItem)].item
						.quantity === 0
				) {
					this.deleteProduct(idProduct, cart);
				}
			}

			return { success: true, data: { cart } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}

	async deleteProduct(idProduct, cart) {
		let storedItem;
		try {
			storedItem = cart.items.find((elem) => {
				return elem.id === idProduct;
			});
			cart.totalQty -= storedItem.item.quantity;
			cart.totalPrice -=
				storedItem.item.quantity * storedItem.item.price;
			cart.items.splice(cart.items.indexOf(storedItem), 1);

			return { success: true, data: { cart } };
		} catch (error) {
			return {
				success: false,
				error: { message: error.message },
			};
		}
	}
}

module.exports = CartService;
