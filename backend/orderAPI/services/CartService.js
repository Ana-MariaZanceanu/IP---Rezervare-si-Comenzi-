/* eslint-disable no-param-reassign */

class CartService {
	constructor({ services }) {
		this.services = services;
	}

	async addProduct(idProduct, cart) {
		console.log(cart);
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
}

module.exports = CartService;
