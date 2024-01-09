'use strict'

const arr = [
	{ id: 1, name: "Вася" },
	{ id: 2, name: "Петя" },
	{ id: 1, name: "Вася" },
]

const unId = [...new Set(arr.map(el => el.id))];
let res = [];
for (const id of unId) {
	res.push(arr.find(el => el.id === id))
};

console.log(res)