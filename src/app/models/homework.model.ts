export class Homework {

	title: string;
	description: string;

	constructor(title = '', description = '') {
		this.title = title;
		this.description = description;
	}
}