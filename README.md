# easy-c-loggr

An easy-to-use tool to create beautiful and consistant console logs within seconds.

### Getting started

1. Install the package

```
  npm install easy-c-loggr
```

2. Add the configuration (JavaScript)

```js
const Logger = require('easy-c-loggr').default;
const logger = new Logger(true, 'EN');
/*
 * new Logger(TIMESTAMP_IS_FORMATTED, FORMAT_LANGUAGE)
 * by default, timestamp formation is disabled, with 'true' you enable it and can choose the language
 * currently available languages: EN, DE
 */
```

2. Add the configuration (TypeScript)

```ts
import Logger from 'easy-c-loggr';
const logger = new Logger(true, 'EN');
/*
 * new Logger(TIMESTAMP_IS_FORMATTED, FORMAT_LANGUAGE)
 * by default, timestamp formation is disabled, with 'true' you enable it and can choose the language
 * currently available languages: EN, DE
 */
```

3. Use the package

```js
logger.error('Error message'); // Red error message
logger.hint('Hint message'); // Blue hint message
logger.log('Log message'); // White log message
logger.success('Success message'); // Green success message
logger.warn('Warn message'); // Yellow warn message
```

### Coming soon

- Custom colors
- More configuration options

### Developer

[MarcDev](https://github.com/MarcWebDev)
