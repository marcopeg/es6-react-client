# React Client

> Starter kit to buid `React/Redux` based _Single Page Apps_.

## First Setup

	npm install

## Run the App - development

During development you run the app through _WebpackDevServer_ so to have development and debug facilities like:

- hot module reloading
- source maps
- Redux Dev Console

```
npm start
```

## Run the App - production

You can run the application in _production mode_ (minified bundle, without development & debug facilities):
	
```
npm run app
```

## Code Quality (eslint)

```
// through NPM interface (*)
npm run eslint
	
// or direct invocation
./node_modules/eslint/bin/eslint.js ./**/*.js
```

_(*) In case of errors it shows an horrible NPM related error trace which is completely unrelated to the real code investigation. Just ignore it or run the direct invocation command._

## Testing

```
npm test
```