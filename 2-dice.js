'use strict';

function throwADice(dice) {
	const min = 1;
	const max = Number(dice.slice(1));
	if (isNaN(max)) {
		console.log('Ошибка: неверный формат Dice')
		return
	};
	const scale = Math.random();
	console.log(Math.floor(scale * (max - min + 1) + min))
};
throwADice('d20');
throwADice('di20');