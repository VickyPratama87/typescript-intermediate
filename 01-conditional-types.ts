class Admin {
	create() {}
	read() {}
	update() {}
	delete() {}
}

class Manager {
	read() {}
	comment() {}
}

type User<T> = T extends 'admin' ? Admin : Manager;

const sales1: User<'admin'> = new Admin();
const sales2: User<'manager'> = new Manager();
// const sales3: User<'admin'> = new Manager(); // Error
