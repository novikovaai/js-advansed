'use strict';
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
	try {
		const res = await Promise.all([getIdea(), getIdea(), getIdea()])

		console.log(res)
	}
	catch (e) {
		console.error(e)
	}
}

getThreeIdeas()
