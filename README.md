# A great generator builder for ReactJs with redux saga

This is a starter template make your life easier.

# Demo:

[http://woebegone-stop.surge.sh/](http://woebegone-stop.surge.sh/)

# Requirements

This is a Yeoman generator. You need to install Yeoman, NodeJS and npm to install the generator and its dependencies. Make sure you have all installed globally.

First, download and install NodeJS and npm. More information about NodeJS / npm: https://nodejs.org/

Second, install Yeoman. `npm i -g yeoman-generator ` More information about Yeoman: http://yeoman.io/

<!-- # Installation

```
$ npm install -g generator-react-redux-saga-fulfilled

```

# Usage

```
$ cd my-app
$ yarn dev

``` -->

# Folder Structure

```
my-app/
  config/
    webpack/
        dev.js
        stag.dev.js
        prod.js

  components/
    activeLink/
    footer/
    header/
    layout/
    navLink/
    characterInfo/
    nav/


  pages/
    about/
    home/

  redux/
    actions.js
    epics.js
    index.js
    reducer.js

  static/
    favicon.ico
    locales/
        en/
            common.js
    images/
  tests/
    units/
        components/
        jest.config.js
        pages/
        setup/
            index.js
            assetsTransformer.js
  README.md
  .gitignore
  .prettierrc
  i18n.js
  .babelrc
  .eslintrc
  server.js //express app
  package.json
```

# Available Scripts

### `yarn dev or yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance with webpack.

### `yarn deploy`

deploy staging static react app to surge.sh.

# Available Generators

```
yarn store - redux-saga with fulfilled state
yarn action - redux-saga action
yarn com - component
yarn enum - enums allow us to declare a set of named constants
yarn hoc - hoc component
yarn hook - custom hook
yarn context - react context
yarn model - create typescript model interface/type

```

It will prompt you the name and the title for your new page.

```
$ yarn page or yo generator-react-redux-saga-fulfilled:page
? Page name: contactUs
? Page title: Contact Us Page
   create pages/contactUs/contactUs.js
   create pages/contactUs/index.js
   create pages/contactUs/contactUs.scss
   create static/locales/en/contactUs.json
   create tests/units/pages/contactUs.test.js
```

# Credits

Inspired by Electron Hacked Github: https://github.com/ElectronHacked/nextjs-typescript-antd
Inspired by https://github.com/AnalyticsFire/generator-create-next-app-reloaded by Damian Aruj

# Licence

MIT
