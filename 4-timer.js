'use strict';

// Сделать приложение, которое в браузере выводит таймер реального времени,
// который показывает, сколько осталось до нового года в формате
// 10 месяцев, 5 дней, 10 часов, 6 минут, 5 секунд

const counter = document.querySelector('.counter');
const date = document.querySelector('.date');

setInterval(() => {
	const now = new Date(Date.now());
	counter.innerText = `${11 - now.getMonth()} месяцев, ${30 - now.getDate()} дней, ${23 - now.getHours()} часов, ${59 - now.getMinutes()} минут, ${59 - now.getSeconds()} секунд`;
}, 1000)

const nextNewYear = new Date(`${new Date().getFullYear() + 1}-01-01`);
date.innerText = new Intl.DateTimeFormat('ru-RU').format(nextNewYear)

