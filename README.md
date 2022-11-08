<h1 align="center">KonLoader - Flash and Loading Screen</h1>

## Example
```js
// Init KonLoader
const konloader = KonLoader.getInstance();
konloader.initialize();

// Hide Only Background
konloader.hideFlash();

// Hide Loader
setTimeout(() => konloader.hide(), 1500);
```

## Usage

#### Initialize
```js
const konloader = KonLoader.getInstance();
konloader.initialize();
```

#### Show Loader
```js
konloader.show();
```

#### Hide Loader
```js
konloader.hide();
```
#### Show Only Background
```js
konloader.showFlash();
```

#### Hide Only Background
```js
konloader.hideFlash();
```
