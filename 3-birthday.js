'use strict';

const userBirthday = '2010-01-01';

function isFourteenYearsOld(birthday) {
	const now = new Date(Date.now());
	const bd = new Date(birthday);
	const yearsPassed = now.getFullYear() - bd.getFullYear();

	if (yearsPassed < 14) {
		return false
	}
	if (yearsPassed > 14) {
		return true
	}
	if (now.getMonth() < bd.getMonth()) {
		return false
	}
	return now.getDate() >= bd.getDate();
}
console.log(isFourteenYearsOld(userBirthday))