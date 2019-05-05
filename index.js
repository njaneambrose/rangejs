var Range = (function(){
    return {
        /**
         * Generates a range from start to end with a difference of 1
         * @param {Number}start
         * @param {Number} end
         * @returns {Array}
         */
        range: function (start, end=undefined) {
            if(end === undefined){
                end = start;
                start = 0;
            }
            var $back = [];
            if(end > start){ /* forward range */
                for (var aq = start; aq < end; aq++) {
                    $back.push(aq);
                }
            }else{ /* backward range */
                for (var a = start; a > end; a--) {
                    $back.push(a);
                }
            }
            return $back;
        },
        /**m
         * Generates a range from start to end with a difference of diff
         * @param {Number} start
         * @param {Number} end
         * @param {Number} diff
         * @returns {Array}
         */
        ranges: function (start,end,diff=1) {
            if(diff === undefined){
                diff = 1;
            }
            var $back = [];
            if(end  > start){ /* forward range */
                if(end - diff > end){
                    throw new Error('Possible infinite loop detected check your diff');
                }
                for (var ac = start; ac < end; ac += diff) {
                    $back.push(ac);
                }
            }else{ /* backward range */
                if(end + diff > end){
                    throw new Error('Possible infinite loop detected check your diff');
                }
               for (var a = start; a > end; a += diff) {
                    $back.push(a);
                }
            }
            return $back;
        }
    }

})();

module.exports = Range;
