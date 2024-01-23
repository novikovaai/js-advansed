'use strict';

function getPosition() {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition((position) => {resolve([position.coords.latitude, position.coords.longitude])}, 
			(error) => { reject(new Error(`Не удалось получить координаты: ${error.message}`)) })		
	})
}

getPosition()
	.then(data => console.log(`Ваши координаты:
Широта: ${data[[0]]}
Высота: ${data[[1]]}`))
	.catch(err => console.error(err))


