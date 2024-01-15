/* Спроектируйте класс Billing со свойством amount и методом calculateTotal для расчета счета.
Сделайте разный calculateTotal для разных типов
- fixBilling - где нужно вернуть amount как результат
- hourBilling - который считает amount * число часов
- itemBilling - где считается amount * число элементов
Соблюдайте принцип открытости / закрытости */

class Billing {
	constructor(amount) {
		this.amount = amount;
	}
	calculateTotal() {
	}
}

class FixBilling extends Billing {
	calculateTotal() {
		return this.amount
	}
}

class HourBilling extends Billing {

	constructor(amount, hours) {
		super(amount);
		this.hours = hours;
	}
	calculateTotal() {
		return this.amount * this.hours
	}
}

class ItemBilling extends Billing {
	constructor(amount, items) {
		super(amount);
		this.items = items;
	}
	calculateTotal() {
		return this.amount * this.items
	}
}

const test1 = new FixBilling(100)
console.log(test1.calculateTotal())
const test2 = new HourBilling(5, 10)
console.log(test2.calculateTotal())
const test3 = new ItemBilling(70, 3)
console.log(test3.calculateTotal())