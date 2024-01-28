import { DivComponent } from "../../common/div-component.js";
import './search.css'

export class Search extends DivComponent {
	constructor(state) {
		super();
		this.state = state;
	}

	render() {
		this.el.innerHTML = '';
		this.el.classList.add('search');
		this.el.innerHTML = `
			<div class="search__wrapper">
				<img src="/static/search.svg" alt="Поиск иконка" class="search__icon">
				<input type="text" class="search__input" value="${this.state.searchQuery ? this.state.searchQuery : ''}" placeholder="Найти книгу или автора...">
				
			</div>			
			<button class="search__button" area-label="Искать"><img src="/static/search-white.svg" alt="Поиск иконка"></button>
		`;
		return this.el
	}
}