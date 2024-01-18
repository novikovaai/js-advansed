'use strict';

function getData(url, errMsg) {
	return fetch(url).then(response => {
				if (!response.ok) {
					throw new Error(`${errMsg} ${response.status}`)
				}
				return response.json()
			}
		)
}


const pokText = document.querySelector('.pokemonAb');
getData('https://pokeapi.co/api/v2/pokemon/ditto', 'Ошибка в адресе')
	.then(({ abilities }) => {
		return getData(abilities[0].ability.url, 'Произошла ошибка')
	})
	.then(data => {
		const data1 = data.effect_entries
		for (const entry of data1) {
			if (entry.language.name === 'en') {
				pokText.innerText = entry.effect
			}
		}		
	})
	.catch(error => {
		const el = document.querySelector('.pokemonErr')
		el.innerHTML = error.message
	});