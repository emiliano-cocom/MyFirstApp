export class Person {

	name: string;
	last_name: string;
	age: number;
	is_active: boolean;

	constructor(name: string, last_name: string, age: number, is_active: boolean) {
		this.name = name;
		this.last_name = last_name;
		this.age = age;
		this.is_active = is_active;
	}
}