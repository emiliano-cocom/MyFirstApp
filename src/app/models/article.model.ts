export class Article {
	name: string;
	quantity: number;
	department: string;

	constructor(name: string = '', quantity: number = 0, department: string = '') {
		this.name = name;
		this.quantity = quantity;
		this.department = department;
	} 
}