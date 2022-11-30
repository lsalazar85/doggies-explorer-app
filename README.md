# doggies-explorer-app

Doggies explorer app development with Vue.js & Web3.js

## Deployment app
[Online version](https://doggies-explorer-app.vercel.app/)

## Run

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start
```

Starts on `http://localhost:3000`

## Technical details
- The project is developed with Nuxt.js and Typescript.
- It is 100% multi-devices and all the UI is developed with Sass.
- I implemented [Web3.js](https://web3js.readthedocs.io/en/v1.8.1/) as a connection interface to get the data of an NFT for its token.
- Traits is a table-type component that I developed for the trait list I didn't like how it was implemented with data, but I decided to keep it in the component list with its unit test.

## Future Improvements
- Add unit tests for store state and interactions.

## Development technologies and external packages

- Nuxt.js
- Typescript
- Vuex
- Web3.js
- Sass
- Vue jest 
- Eslint & Prettier
