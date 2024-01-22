'use strict';

// Поменять местами ключи и значения

let weatherMap = new Map([
	['London', 10],
	['Moscow', 7],
	['Paris', 14]
])

let temp = 0;
const stop = weatherMap.size;

for (let [key, value] of weatherMap) { 
	temp++;
	weatherMap.set(value, key);
	weatherMap.delete(key);
	if (temp === stop) {
		break
	}
}

console.log(weatherMap)

//Сделать функцию, которая принимает min и max и возвращает случайное число между ними

const min = 1;
const max = 20;

function randomNumber(min, max) {
	const scale = Math.random();
	return Math.floor(scale * (max - min + 1) + min)

}

randomNumber(min, max)

// Сделать конвертер валют

function currencyConverter(amount, initialCurrency, targetCurrency) {
	const curRub = {
		style: 'currency',
		currency: 'RUB'
	}
	const curUsd = {
		style: 'currency',
		currency: 'USD'
	}
	const curEur = {
		style: 'currency',
		currency: 'EUR'
	}
	switch (initialCurrency) {
		case 'RUB': switch (targetCurrency) {
			case 'USD': return new Intl.NumberFormat('ru-RU', curUsd).format(amount / 89.7619);
			case 'EUR': return new Intl.NumberFormat('ru-RU', curEur).format(amount / 97.9126);
			default: return null;
		}
		case 'USD': switch (targetCurrency) {
			case 'RUB': return new Intl.NumberFormat('en-US', curRub).format(amount * 89.7619);
			case 'EUR': return new Intl.NumberFormat('en-US', curEur).format(amount * 0.9168);
			default: return null;
		}
		case 'EUR': switch (targetCurrency) {
			case 'RUB': return new Intl.NumberFormat('en-EN', curRub).format(amount * 97.9126);
			case 'USD': return new Intl.NumberFormat('en-EN', curUsd).format(amount * 1.0908);
			default: return null;
		}
		default:
			return null;
	}
}

console.log(currencyConverter(1000, 'RUB', 'EUR'));

// проверить, есть ли сегодня день рождения у пользователя

const user = {
	name: 'Vasya',
	birthday: '01/11/2024'
}

function checkBirthday(user) {
	const now = new Date(Date.now());
	const bd = new Date(user.birthday);
	return now.getMonth() == bd.getMonth() && now.getDate() == bd.getDate()
};

console.log(checkBirthday(user))

// Таймер пиццы Сделать таймер пиццы (функция, принимающая время),
// который будет выводить в консоль секунды, оставшиеся до готовности пиццы
// и сообщение по готовности. 00:04 00:03 00:02 00:01 00:00 🍕!!!

function pizzaReadyIn(time) {
	const now = Date.now();
	let newTime = now + time;
	const options = {
		second: "numeric",
		minute: "numeric",
	};
	const interval = setInterval(() => {
		console.log(new Intl.DateTimeFormat('ru-RU', options).format(newTime + 100 - Date.now()));
	}, 1000)
	setTimeout(() => {
		clearInterval(interval);
		console.log('🍕!!!')
	}, time)
}

pizzaReadyIn(5000)

/*Реализовать на функция и прототипах корзину товаров с методами
-  Добавить товар
-  Увеличить число товаров
-  Уменьшить число товаров (удалить, если их 0)*/

const Basket = function () {
	this.products = [];
}
Basket.prototype.add = function (product) {
	for (const good of this.products) {
		if (good.id === product.id) {
			this.plus(product)
			return
		}
	}
	this.products.push(product)
}
Basket.prototype.plus = function (product) {
	for (const good of this.products) {
		if (good.id === product.id) {
			good.count += 1;
			break
		}
	}
}
Basket.prototype.minus = function (product) {
	for (const good of this.products) {
		if (good.id === product.id) {
			good.count -= 1;
			if (good.count === 0) {
				this.products.splice(this.products.indexOf(good), 1)
			};
			break
		}
	}
}

const product = { id: 1, name: 'Bread', count: 1 }
const basket = new Basket()
basket.add(product)
basket.add(product)
console.log(basket)

/* Реализовать класс пользователя, со свойствами
- логин
- пароль
Причем пароль при установке должен переворачиваться и в таком виде храниться.
Пароль и логин после создания изменить нельзя. Так же у класса добавить методы
- Смены пароля (передаем старый и новый пароль)
- Сверки пароля */

class User {
	#login;
	#password;
	constructor(login, password) {
		this.#login = login;
		this.#password = password.split('').reverse().join('')
	}
	#ChangePasswordPr(newPassword) {
		this.#password = newPassword.split('').reverse().join('');
		console.log(`Пароль изменен на ${newPassword}`)
	}

	changePassword(password, newPassword) {
		if (this.checkPassword(password)) {
			this.#ChangePasswordPr(newPassword)
		}
	}

	checkPassword(password) {
		return password === this.#password.split('').reverse().join('');
	}

	get login() {
		return this.#login
	}
}

let user1 = new User('1@1', 'erhw43d')

console.log(user1)

user1.changePassword('erhw43d', 'dffr$f')

console.log(user1.checkPassword('erhw43d'))

/*Сделать класс врага со здоровьем и методом получения урона
* Сделать класс меча, который имеет силу и метод нанесения уроноа
* Сделать класс орка, который в 50% случаев не получает урон*/

class Enemy {
	health;
	constructor(health) {
		this.health = health;
	}

	get health() {
		return this.health
	}

	receiveDamage(damage) {
		this.health -= damage;
		if (this.health <= 0) {
			console.log('Враг мертв')
		}
	}
}

class Sword {
	#strength;
	constructor(strength) {
		this.#strength = strength;
	}
	get strength() {
		return this.#strength
	}

	makeDamage(enemy) {
		enemy.receiveDamage(this.strength)
	}
}

class Orc extends Enemy {
	constructor(health) {
		super(health);
	}
	receiveDamage(damage) {
		let isDamage = Math.round(Math.random())
		if (isDamage) {
			this.health -= damage;
		}
		if (this.health <= 0) {
			console.log('Враг мертв')
		}
	}

}

const thrall = new Orc(100)
const goldenGlory = new Sword(25)

goldenGlory.makeDamage(thrall)
console.log(thrall.health)

// Посчитать среднюю цену товаров

const request = new XMLHttpRequest();
request.open('GET', 'https://dummyjson.com/products');
request.send();
request.addEventListener("load", function () {
	const products = JSON.parse(this.responseText).products
	let totalPrice = 0
	let count = 0
	for (const product of products) {
		totalPrice += product.price
		count++
	}
	console.log(totalPrice / count)

})

/*Получить геолокацию пользователя через
Geolocation.getCurrentPosition()
* https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=00&longitude=00*/

function myCoords() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition((position) => {
			resolve({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude
			})
		}, (error) => { reject(error.message) });
	})

}


async function myCity() {
	try {
		const crds = await myCoords();
		const data = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${crds.latitude}&longitude=${crds.longitude}`);
		const dataJ = await data.json()
		console.log(dataJ.city)
	}
	catch (e) {
		console.error(e)
	}
}

myCity()
/*Сделать генератор трех идей от скуки
https://www.boredapi.com/api/activity
с отображением на странице*/

async function getIdea() {
	const res = await fetch('https://www.boredapi.com/api/activity')
	const data = await res.json()
	return await data.activity
}


const ideas = document.querySelector('.randomIdeas');

async function getThreeIdeas() {
	ideas.innerHTML = ''
	try {
		const res = await Promise.all([getIdea(), getIdea(), getIdea()])
		for (const i of res) {
			const element = document.createElement('div');
			element.classList.add('idea');
			ideas.appendChild(element)
			element.innerText = i
		}
	}
	catch (e) {
		console.error(e)
	}
}

// Динамически создать N элементов с текстом 
//и поле для поиска. При вводе в поле, выделять элементы, 
//которые содержат введенный текст

function randomInteger(min, max) {
	let rand = min + Math.random() * (max - min);
	return Math.floor(rand);
}

const button = document.querySelector('.button');
const inner = document.querySelector('.inner');
const outer = document.querySelector('.outer');
const search = document.querySelector('.search');

const firstWord = ['Международный', 'Всемирный', 'Всероссийский', 'Национальный'];
const thirdWord = ['любви', 'дружбы', 'объятий', 'пива', 'пряников', 'мульфильмов', 'яблок', 'мам', 'пап', 'детей'];

button.addEventListener('click', function (event) {
	const el = document.createElement('div');
	el.classList.add('inner')
	outer.append(el)
	el.innerText = firstWord[randomInteger(0, firstWord.length)] + ' день ' + thirdWord[randomInteger(0, thirdWord.length)]
});

function toSearch() {
	for (const child of outer.children) {
		if (child.innerText.includes(search.value.toLowerCase())) {
			child.style.backgroundColor = 'green'
		}
	}
}

search.addEventListener('change', toSearch)