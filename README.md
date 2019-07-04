# rangelib

Use this package to generate numerical ranges

## Installation

Run this command from your favourite command line

    npm install rangelib

## Examples

```js
var range = require('rangelib');
/* range = (start_val,end_val) diff=1 */
range.range(5); // [0, 1, 2, 3, 4]
range.range(9,15); // [9, 10, 11,, 12, 13, 14, 15]
range.range(-5); // [0, -1, -2, -3, -4]
range.range(1,-9); // [1, 0 , -1, -2, -3, -4, -5, -6, -7, -8]

/* ranges = (start_val,end_val,diff=1) */

ranges.ranges(10,15); // [10, 11 , 12, 13, 14]
range.ranges(0,20,5); // [0, 5, 10, 15]
range.ranges(-10,-2,2); // [-10, -8, -6, -4]

/* New Method 
  Split an array into n items per sub-array
*/

range.splitRows([1,2,3,4,5,6,7,8],2); // [[1,2],[3,4],[5,6],[7,8]]

/* New Method 
  Split an array into n sub-arrays automatically fitting equal items for each
*/
range.splitCols([1,2,3,4,5,6,7,8],2) // [[1,2,3,4],[5,6,7,8]]
```
## Caught a bug?

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
3. Within the module you want to test your local development instance of rangelib, just link it to the dependencies: `npm link rangejs`. Instead of the default one from npm, node will now use your clone of rangejs!