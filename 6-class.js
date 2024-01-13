class Car {
	#brand;
	#model;
	#_mileage;
	constructor(brand, model, mileage) {
		this.#brand = brand;
		this.#model = model;
		this.#mileage = mileage;
	}

	get #mileage() {
		return this.#_mileage
	}

	set #mileage(newMileage) {
		this.#_mileage = newMileage;
	}

	changeMileage(newMileage) {
		this.#mileage = newMileage;
	}

	info() {
		console.log(`Марка машины ${this.#brand}, модель ${this.#model}, пробег ${this.#mileage}`)
	}
}

const car1 = new Car('Geely', 'Atlas', 23000)
car1.info()
car1.changeMileage(40000)
car1.info()