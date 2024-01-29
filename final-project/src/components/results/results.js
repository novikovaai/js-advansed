import { DivComponent } from "../../common/div-component.js";
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
					Найдено книг - ${this.parentState.list.length}
				</h1>
		`
		return this.el
	}
}