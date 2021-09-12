# active-links [![NPM version](https://img.shields.io/npm/v/active-links.svg?style=flat)](https://www.npmjs.com/package/active-links) [![NPM downloads](https://img.shields.io/npm/dm/active-links.svg?style=flat)](https://npmjs.org/package/active-links)

:link::sparkles: Add classes to links if their href attribute matches the current url.

Useful on static websites as a visual indicator to show what page you're on.

## Installation

```sh
$ npm install active-links --save
```

## Usage

```js
const activeLinks = require('active-links');

// supply a selector, and the class you want to add to the links matching the current url
activeLinks('nav a', 'is-active');

// alternatively, you can use an array for the classes
activeLinks('nav a', ['text-blue-500', 'border-b-2', 'border-blue-500']);

// you can also specify a list of classes to set on the rest of the inactive items, if you want
activeLinks('nav a', 'is-active', 'is-inactive');
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/pad-left/issues/new).

## Contributing

Pull requests and stars are welcome. Have an issue? [Submit it here!](https://github.com/aschmelyun/active-links/issues/new) Want to get in touch directly? Feel free to reach out to me on [Twitter](https://twitter.com/aschmelyun) for any other questions or comments.

## License

The MIT License (MIT). See [LICENSE.md](https://github.com/aschmelyun/cleaver/blob/master/LICENSE.md) for more details.