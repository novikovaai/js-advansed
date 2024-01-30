import { DivComponent } from "../../common/div-component.js";
import { Card } from "../card/card.js";
import './results.css'


export class SearchResults extends DivComponent {
	constructor(appState, parentState) {
		super();
		this.appState = appState;
		this.parentState = parentState;
	}

	render() {		
		if (this.parentState.loading) {
			this.el.innerHTML = `
				<div class="result__loading">
					<img src="/static/loading.gif" alt="Иконка загрузки">
				</div>
			`
			return this.el
		}
		this.el.innerHTML = '';
		this.el.classList.add('result');
		this.el.innerHTML = `
				<h1>
					Найдено книг - ${this.parentState.numFound}
				</h1>
		`
		
		for (const card of this.parentState.list) {
			this.el.append(new Card(this.appState, card).render())
		}
		return this.el
	}
}