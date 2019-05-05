/*
 * Rangejs examples
 * Be careful with difference in range3 and range4 to prevent creation of an infinite loop
*/
var range = require('../');
/*
 * range
 * This requires two parameters the start and end value
 * The difference between values is 1
 */
console.log("range(10) : ",range.range(10));
console.log("range(-10) : ",range.range(-10));

/*
 * ranges
 * This requires two values the end and difference and assumes diff as 1
 */
console.log("ranges(-20,-3) : ",range.ranges(-20,-3));
console.log("ranges(60,3,-3) : ",range.ranges(60,3,-3));
