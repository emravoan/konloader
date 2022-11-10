import { IHideOption, IShowOption, qs } from './constant';
import './scss/app.scss';

export default class KonLoader {

	static klddom: string = `<div id="konloader" class="kld-container" style="display: none"><div class="kld-flash hidden" style="display: none"></div><div class="kld-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>`;

	static show(option: IShowOption = {}) {
		if (!qs('#konloader')) {
			document.body.appendChild(
				(new DOMParser()).parseFromString(KonLoader.klddom, 'text/html').body.firstChild as HTMLElement
			);
		}

		if (option.theme === 'light') {
			qs('#konloader').classList.add('dark');
		}

		if (!option.isShowBackground) {
			// hide background
			qs('#konloader').firstElementChild.classList.add('hidden');
			setTimeout(() => qs('#konloader').firstElementChild.style.setProperty('display', 'none'), 1500);

			qs('#konloader').style.setProperty('display', '');
			return;
		}

		qs('#konloader').style.setProperty('display', '');
		qs('#konloader').firstElementChild.classList.remove('hidden');
		qs('#konloader').firstElementChild.style.setProperty('display', '');
	}

	static hide(option: IHideOption = {}) {
		if (!qs('#konloader')) {
			return;
		}

		if (option.isBackgroundOnly) {
			// hide background
			qs('#konloader').firstElementChild.classList.add('hidden');
			setTimeout(() => qs('#konloader').firstElementChild.style.setProperty('display', 'none'), 1500);

			qs('#konloader').style.setProperty('display', '');
			return;
		}

		qs('#konloader').style.setProperty('display', 'none');
		qs('#konloader').firstElementChild.classList.add('hidden');
		setTimeout(() => qs('#konloader').firstElementChild.style.setProperty('display', 'none'), 1500);
	}
}
