/*Переделать классы на ES6
Сделать пеопределение метода говорить*/

class Person {
	constructor(race, name, lang) {
		this.race = race;
		this.name = name;
		this.lang = lang;
	}

	speak() {
		console.log(`Меня зовут ${this.name}. Я говорю на ${this.lang}`)
	}
}


class Orc extends Person {
	constructor(race, name, lang, weapon) {
		super(race, name, lang);
		this.weapon = weapon;
	}

	attack() {
		console.log(`${this.name} бьет с помощью ${this.weapon}`)
	}
	speak() {
		console.log(`Меня зовут ${this.name}. Я говорю на ${this.lang} и я ${this.race}`)
	}

}


class Elf extends Person {
	constructor(race, name, lang, spell) {
		super(race, name, lang);
		this.spell = spell;
	}

	attack() {
		console.log(`${this.name} кастует ${this.spell}`)
	}
	speak() {
		console.log(`Меня зовут ${this.name}. Я ${this.race} и я говорю на ${this.lang}`)
	}

}

const thrall = new Orc('Орк', 'Thrall', 'Orcish', 'Секира')
const telestra = new Elf('Эльф', 'Telestra', 'Thalassian', 'Волшебный шар')

thrall.speak()
thrall.attack()
telestra.speak()
telestra.attack()