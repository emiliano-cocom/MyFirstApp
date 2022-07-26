export class Product {

	name: string;
	img_url: string;
	price: number;
	quantity: number;

	constructor(name: string, img_url: string, price: number) {
		this.name = name;
		this.img_url = img_url;
		this.price = price;
		this.quantity = 1;
	}
}