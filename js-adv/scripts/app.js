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