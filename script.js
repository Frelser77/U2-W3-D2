class User {
	constructor(firstName, lastName, age, location) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.location = location;
	}

	compareAge(anotherUser) {
		if (this.age < anotherUser.age) {
			return `${anotherUser.firstName} è più vecchio di ${this.firstName}.`;
		} else if (this.age > anotherUser.age) {
			return `${anotherUser.firstName} è più giovane di ${this.firstName}.`;
		} else {
			return `${anotherUser.firstName} è della stessa età di ${this.firstName}.`;
		}
	}
}

x = new User("Brus", "Willis", 63, "New York");
y = new User("Tomas", "Ford", 45, "Zurigo");
z = new User("Toro", "El", 27, "Milano");
console.log(x.compareAge(y));
console.log(y.compareAge(z));
console.log(z.compareAge(x));
