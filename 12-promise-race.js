'use strict';

let promArr = [
	new Promise(resolve => setTimeout(resolve, 13000, 'third')),
	new Promise(resolve => setTimeout(resolve, 3000, 'first')),
	new Promise(resolve => setTimeout(resolve, 12000, 'second'))	
];

async function race(arr) {
	return new Promise((resolve, reject) => {
		for (const prom of arr) {
			prom.then(resolve, reject)
		}
	})
}

race(promArr).then(data => console.log(data));
