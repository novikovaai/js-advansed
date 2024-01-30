import { DivComponent } from "../../common/div-component.js";
import './card.css'


export class Card extends DivComponent {
	constructor(appState, cardState) {
		super();
		this.appState = appState;
		this.cardState = cardState;
	}

	#delFromFav() {
		this.appState.favorites.splice(this.appState.favorites.indexOf(this.cardState), 1)
	}

	#addToFav() {
		this.appState.favorites.push(this.cardState);	
	}

	render() {		
		this.el.innerHTML = '';
		this.el.classList.add('card');
		const existsInFavorites = this.appState.favorites.find(
			b => b.key === this.cardState.key
		)
		this.el.innerHTML = `
			<div class="card__img">
				<img src="https://covers.openlibrary.org/b/id/${this.cardState.cover_i}-M.jpg" alt="Обложка">
			</div>
			<div class="card__info">
				<div class="card__tag">
					${this.cardState.subject ? this.cardState.subject[0] : 'Не задано'}
				</div>
				<div class="card__name">
					${this.cardState.title}
				</div>
				<div class="card__author">
					${this.cardState.author_name ? this.cardState.author_name[0] : 'Не задано'}
				</div>
				<div class="card__footer">
					<button class="button_add ${existsInFavorites ? 'button__active' : ''}">
						${existsInFavorites 
							? '<img src="/static/favorites.svg" alt="">'
							: '<img src="/static/favorite-white.svg" alt="">'}
					</button>
				</div>
			</div>
		`
		if(existsInFavorites) {
			this.el
				.querySelector('.button_add')
				.addEventListener('click', this.#delFromFav.bind(this));
		} else {
			this.el
				.querySelector('.button_add')
				.addEventListener('click', this.#addToFav.bind(this));
		}		
		return this.el
		
	}
}