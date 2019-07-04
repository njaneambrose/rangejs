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
        },
        /**
         * Allows you to create a multi-dimensional array by splitting an array into n items per sub-array
         * @param arr
         * @param n
         */
        splitRows: function (arr,n) {
            let a = arr.length,
            ar1 = [],
            c = 0;
            while(a > c){
                let ar2 = [];
                for(let b = c;b < c+n;b++){
                    ar2.push(arr[b] || undefined);
                }
                ar1.push(ar2);
                c +=n;
            }
            return ar1;
        },
        /**
         *
         * @param arr
         * @param cols
         * @returns {*|Array}
         */
        splitCols: function (arr,cols) {
            let i = Math.ceil(arr.length/cols);
           return this.splitRows(arr,i);
        }
    }

})();

module.exports = Range;
