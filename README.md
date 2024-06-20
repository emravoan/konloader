<h1 align="center">KonLoader - Simple JS Loader</h1>

## Example

```js
import KonLoader from '@emravoan/konloader';

// show with Background
KonLoader.show();

// 4 seconds later after hide background, hide loading
setTimeout(() => KonLoader.hide(), 4000);
```

## Usage

#### Show

```js
KonLoader.show();

// for dark mode
KonLoader.show({ mode: 'dark' });
```

#### Hide

```js
KonLoader.hide();
```

#### CSS

```css
:root {
  --kld-color: #212a44;
  --kld-dark-color: #ffffff;
}
```
