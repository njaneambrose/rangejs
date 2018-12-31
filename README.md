# rangejs

Use this package to generate numerical ranges

## Installation

Run this command from your favourite command line

    npm install rangejs

## Examples

```js
var range = require('rangejs');
range.range1(0,5) // [0, 1, 2, 3, 4]
range.range1(0,-5) // [0, -1, -2, -3, -4]

range.range2(5) // [0, 1, 2, 3, 4]
range.range2(-5) // [0, -1, -2, -3, -4]

range.range3(0,10,3) // [0, 3, 6, 9]
range.range3(0,-20,-4) // [0, -4, -8, -12, -16]

range.range4(20,5) // [0, 5, 10, 15]
range.range4(-10,-2) // [0, -2, -6, -8]

```
## Caught a bug?

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Within the module you want to test your local development instance of ms, just link it to the dependencies: `npm link rangejs`. Instead of the default one from npm, node will now use your clone of rangejs!