'use strict';

const wrapper = document.querySelector('.wrapper');
const counter = document.querySelector('.counter');
const buttons = document.querySelectorAll('.button')
let count = 0;

function buttonClicked(button) {	
	if (button.classList[0] !== 'button'){return}
	const clickedButton = document.querySelector(`.${button.classList[1]}`);
	for (const b of buttons) {
		if (b.getAttribute('press')) {
			b.innerText = 'Нажми меня!';
			b.removeAttribute('press');
			b.style.backgroundColor = 'rgb(58, 34, 3)';
			if (clickedButton == b) {
				count--
			}
		}		
	}	
	clickedButton.setAttribute('press', 'pressed')
	clickedButton.innerText = 'Нажата!';
	clickedButton.style.backgroundColor = 'rgb(122, 36, 36)';	
	count++;
	counter.innerText = count;
}
 
wrapper.addEventListener('click', event => buttonClicked(event.target))