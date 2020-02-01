# Alpaca React Native Mobile App
Alpaca is a modern platform for algorithmic trading.

This is an example React native mobile app to help you get started with Alpaca.

You can find apps on [App store](https://itunes.apple.com/us/app/alpaca-dashboard/id1448888086?ls=1&mt=8) and [Google play store](https://play.google.com/store/apps/details?id=app.alpaca.markets).

## Main technologies used

- [React Native](https://github.com/facebook/react-native)

> A framework for building native apps with React.

- [Redux](http://redux.js.org/)

> Redux is a predictable state container for JavaScript apps.

- [Redux-Saga](https://github.com/redux-saga/redux-saga)

> Redux-Saga is a library that aims to make application side effects easier to manage, more efficient to execute, easy to test, and better at handling failures.

## Screenshot

<div align="center">
  <img width=170 src ="https://github.com/alpacahq/alpaca-rn-mobile/blob/development/screenshots/s1.png"/>
  <img width=170 src ="https://github.com/alpacahq/alpaca-rn-mobile/blob/development/screenshots/s2.png"/>
  <img width=170 src ="https://github.com/alpacahq/alpaca-rn-mobile/blob/development/screenshots/s3.png"/>
  <img width=170 src ="https://github.com/alpacahq/alpaca-rn-mobile/blob/development/screenshots/s4.png"/>
</div>

## Running the project

- Clone this project
```
git clone < project-url.git >
```

- NPM install
```
npm install
```

- Run packager
```
npm start
```

- Run iOS
```
react-native run-ios
```

- Run Android
```
react-native run-android
```

- Get API Key

In order to start trading with Alpaca API, please sign up [here](https://alpaca.markets/).

- Get client id and secret

You will need to specify client id and secret in `App/config.js` to run the project.

Go to [OAuth Apps](https://app.alpaca.markets/brokerage/apps/manage) and get client id/secret.

### Disclosures

Brokerage services are provided by Alpaca Securities LLC ("Alpaca"), member FINRA/SIPC, a wholly-owned subsidiary of [AlpacaDB, Inc](https://alpaca.markets).

Please see the `DISCLOSURES` file in this repository for more information.
