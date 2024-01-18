'use strict';

function getData(url, errMsg) {
	return fetch(url)
		.then(
			response => {
				if (!response.ok) {
					throw new Error(`${errMsg} ${response.status}`)
				}
				return response.json()
			}
		)
}

getData('https://dummyjson.com/products/', 'Страница не найдена')	
	.then(({ products }) => {
		console.log(products);
		return getData('https://dummyjson.com/products/' + products[0].id, 'Товар не найден')
	})
	.then(response => response.json())
	.then(data => {
		console.log(data)
	})
	.catch(error => {
		const el = document.querySelector('.secondTest');
		el.innerHTML = error.message
	})




