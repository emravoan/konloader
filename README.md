<h1 align="center">KonLoader - Simple JS Loader</h1>

## Example

```js
import KonLoader from '@emravoan/konloader';

// show with Background
KonLoader.show({ isShowBackground: true });

// 2 seconds later, hide background
setTimeout(() => KonLoader.hide({ isBackgroundOnly: true }), 2000);

// 2 seconds later after hide background, hide loading
setTimeout(() => KonLoader.hide(), 4000);
```

## Usage

#### Show

```js
KonLoader.show();

// with background
KonLoader.show({ isShowBackground: true });

// with light theme
KonLoader.show({ theme: 'light' });
```

#### Hide

```js
KonLoader.hide();

// only background
KonLoader.hide({ isBackgroundOnly: true });
```

#### CSS

```css
:root {
	--kld-color: #212a44;
	--kld-dark-color: #ffffff;
}
```
