import { DivComponent } from "../../common/div-component.js";
import './navigation.css'

export class NavButtons extends DivComponent {
	constructor(appState, parentState) {
		super();
		this.appState = appState;
		this.parentState = parentState;
	}

	#navigateForward() {		
		this.parentState.offset += 100;		
	}

	#navigateBackward() {
		this.parentState.offset -= 100;
	}

	render() {
		this.el.innerHTML = '';
		this.el.classList.add('nav');
		this.el.innerHTML = `
			<div class="nav__back">
				<img src="/static/arrow_back.svg" alt="Стрелка назад">
				Предыдущая страница
			</div>
			<div class="nav__forward">
				Следующая страница
				<img src="/static/arrow_back.svg" alt="Стрелка вперед">
			</div>
		`
		if (this.parentState.numFound > 100 && this.parentState.offset < this.parentState.numFound) {
			this.el.querySelector('.nav__forward').classList.add('nav__active');
			this.el.querySelector('.nav__forward').addEventListener('click', this.#navigateForward.bind(this));
		} else if (this.parentState.offset >= this.parentState.numFound) {
			this.el.querySelector('.nav__forward').classList.remove('nav__active');
			this.el.querySelector('.nav__forward').removeEventListener('click', this.#navigateForward.bind(this));
		}
		if (this.parentState.offset > 99) {
			this.el.querySelector('.nav__back').classList.add('nav__active');
			this.el.querySelector('.nav__back').addEventListener('click', this.#navigateBackward.bind(this));
		} else {
			this.el.querySelector('.nav__back').classList.remove('nav__active');
			this.el.querySelector('.nav__back').removeEventListener('click', this.#navigateBackward.bind(this));
		}
		
		return this.el
	}

}