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