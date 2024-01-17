'use strict';

const userBirthday = '2010-01-01';

function isFourteenYearsOld(birthday) {
	const now = new Date();
	const bd = new Date(birthday);
	const isFourteen = new Date(bd.getFullYear() + 14, bd.getMonth(), bd.getDate());
	return isFourteen < now;
}
console.log(isFourteenYearsOld(userBirthday))