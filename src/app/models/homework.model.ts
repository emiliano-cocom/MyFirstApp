export class Homework {

	title: string;
	description: string;
	is_complete: boolean;

	constructor(title: string = '', description: string = '') {
		this.title = title;
		this.description = description;
		this.is_complete = false;
	}
}