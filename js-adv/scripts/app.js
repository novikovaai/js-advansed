'use strict';

// function getThreeIdeas(event){
// 	console.log(event.target.getBoundingClientRect())
// 	console.log(`X offset: ${window.pageXOffset}`)
// 	console.log(`Y offset: ${window.pageYOffset}`)

// 	const el = document.querySelector('.down');
// 	const rect = el.getBoundingClientRect();

// 	window.scrollTo({ 
// 		left: window.pageXOffset + rect.left, 
// 		top: window.pageYOffset + rect.top,
// 		behavior: "smooth",
// })
// }


// console.log(outer)


// inner.addEventListener('click', function (event) {
// 	console.log('inner');
// 	this.style.backgroundColor = 'purple'
// })

// outer.addEventListener('click', function (event) {
// 	console.log('outer');
// 	this.style.backgroundColor = 'blue'
// })

// button.addEventListener('click', function (event) {
// 	console.log('button');
// 	this.style.backgroundColor = 'green'
// })


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