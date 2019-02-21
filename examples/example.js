/*
 * Rangejs examples
 * Be careful with difference in range3 and range4 to prevent creation of an infinite loop
*/
var range = require('../');
/*
 * range1
 * This requires two parameters the start and end value
 * The difference between values is 1
 */
console.log("range1(0,10) : ",range.range1(0,10));
console.log("range1(0,-10) : ",range.range1(0,-10));

/*
 * range2
 * This assumes the starting point is 0 here the only parameter needed is the end value
 * The difference is 1
 */
console.log("range2(10) : ",range.range2(10));
console.log("range2(-10) : ",range.range2(-10));

/*
 * range3
 * This requires three parameters the start,end and difference values
 */
console.log("range3(0,-10,-2) : ",range.range3(0,-10,-2));
console.log("range3(0,50,5) : ",range.range3(0,50,5));
console.log("range3(0,2.0,0.2) :",range.range3(0,2.0,0.2));

/*
 * range4
 * This requires two values the end and difference and assumes start as 0
 */
console.log("range4(-20,-3) : ",range.range4(-20,-3));
console.log("range4(60,3) : ",range.range4(60,3));
