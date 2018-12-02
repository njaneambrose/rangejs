var Range = (function(){
    return {
        range1: function (start, end) {
            var back = [];
            for (var a = start; a < end; a++) {
                back.push(a);
            }
            return back;
        },
        range2: function (end) {
            var back = [];
            for (var a = 0; a < end; a++) {
                back.push(a);
            }
            return back;
        },
        range3: function (start,end,diff) {
            var back = [];
            for (var a = start; a < end; a += diff) {
                back.push(a);
            }
            return back;
        },
        range4: function (end,diff) {
            var back = [];
            for (var a = 0; a < end; a += diff) {
                back.push(a);
            }
            return back;
        }
    }
    
})();

module.exports = Range;