import { IOption, qs } from './constant';
import './scss/app.scss';

export default class KonLoader {
  static klddom: string = `<div id="konloader" class="kld-container" style="display: none"><div class="kld-flash hidden" style="display: none"></div><div class="kld-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>`;

  static show(option?: IOption) {
    const elKld = qs('#konloader') as HTMLElement;

    if (!elKld) {
      document.body.appendChild(
        new DOMParser().parseFromString(KonLoader.klddom, 'text/html').body.firstChild as HTMLElement
      );

      KonLoader.show(option);
      return;
    }

    console.log(option);
    if (option?.mode === 'dark') {
      elKld.classList.add('dark');
    }

    elKld.style.setProperty('display', '');
  }

  static hide() {
    const elKld = qs('#konloader') as HTMLElement;

    if (!elKld) {
      return;
    }

    elKld.style.setProperty('display', 'none');
  }
}
