import { qs } from './constant';
import './scss/app.scss';

let konLoaderInstance: KonLoader;

export default class KonLoader {
	kld: HTMLElement;

	constructor() {
		this.kld = qs('#konloader');
	}

	static getInstance() {
		if (!konLoaderInstance) konLoaderInstance = new KonLoader();
		return konLoaderInstance;
	}

	initialize() {
		if (this.kld) return;
		const parser = new DOMParser();
		const domLoader = `
			<div id="konloader" class="kld-container">
				<div class="kld-flash"></div>
				<div class="kld-roller">
					<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
				</div>
			</div>
		`;

		document.body.appendChild(parser.parseFromString(domLoader, 'text/html').body.firstChild);
		this.kld = qs('#konloader');
	}

	show() {
		if (!this.kld) return;
		qs('#konloader').style.setProperty('display', '');
	}

	hide() {
		if (!this.kld) return;
		qs('#konloader').style.setProperty('display', 'none');
	}

	showFlash() {
		if (!this.kld) return;
		qs('#konloader').firstElementChild.classList.remove('hidden');
		setTimeout(() => qs('#konloader').firstElementChild.style.setProperty('display', ''), 1500);
	}

	hideFlash() {
		if (!this.kld) return;
		qs('#konloader').firstElementChild.classList.add('hidden');
		setTimeout(() => qs('#konloader').firstElementChild.style.setProperty('display', 'none'), 1500);
	}
}
