/*Создать базовый класс Персонажа с параметрами: раса, имя, язык и метод - говорить (выводит язык и имя в консоль)
Создать класс Орка, у которого есть оружие и метод удара
Создать класс эльфа, у которого есть заклинания и метод - создать заклинание
Использовать наследование*/

const Person = function (race, name, lang) {
	this.race = race;
	this.name = name;
	this.lang = lang;
}

Person.prototype.speak = function () {
	console.log(`Меня зовут ${this.name}. Я говорю на ${this.lang}`)
}

const Orc = function (race, name, lang, weapon) {
	Person.apply(this, arguments);
	this.weapon = weapon;
}

Orc.prototype = Object.create(Person.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.attack = function () {
	console.log(`${this.name} бьет с помощью ${this.weapon}`)
}


const Elf = function (race, name, lang, spell) {
	Person.apply(this, arguments);
	this.spell = spell;
}

Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.attack = function () {
	console.log(`${this.name} кастует ${this.spell}`)
}

const Thrall = new Orc('orc', 'Thrall', 'Orcish', 'Секира')
const Telestra = new Elf('Эльф', 'Telestra', 'Thalassian', 'Волшебный шар')

Thrall.speak()
Thrall.attack()
Telestra.speak()
Telestra.attack()