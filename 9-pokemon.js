'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto');
request.send();
request.addEventListener("load", function () {
	const abUrl = JSON.parse(this.responseText).abilities[0].ability.url
	
	const request = new XMLHttpRequest();
	request.open('GET', abUrl);
	request.send();
	request.addEventListener("load", function () {
		const data = JSON.parse(this.responseText).effect_entries
		for (const entry of data) {
			if (entry.language.name === 'en') {
				console.log(entry.effect)
			}
		}
	})
})