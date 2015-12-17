# YouCollide Console

## First Setu

	npm install

## Run the App

	// development mode
	npm start
	
	// production mode
	npm run app

## Code Quality

### JSCS

	// through NPM interface (*)
	npm run jscs
	
	// or direct invocation
	./node_modules/jscs/bin/jscs ./**/*.js

_(*) In case of errors it shows an horrible NPM related error trace which is completely unrelated to the real code investigation. Just ignore it or run the direct invocation command._

### ESLint

	// through NPM interface (*)
	npm run eslint
	
	// or direct invocation
	./node_modules/eslint/bin/eslint.js ./**/*.js

_(*) In case of errors it shows an horrible NPM related error trace which is completely unrelated to the real code investigation. Just ignore it or run the direct invocation command._

## Testing

	npm test