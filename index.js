var Range = (function(){
    return {
        range1: function (start, end) {
            var back = [];
            if(end > start){
                for (var aq = start; aq < end; aq++) {
                    back.push(aq);
                }   
            }else{
                for (var a = start; a > end; a--) {
                    back.push(a);
                } 
            }
            return back;
        },
        //Assumes start is 0
        range2: function (end) {
            var back = [];
            if(end > 0){
                for (var ab = 0; ab < end; ab++) {
                    back.push(ab);
                }   
            }else{
                for (var a = 0; a > end; a--) {
                    back.push(a);
                } 
            }
            return back;
        },
        range3: function (start,end,diff) {
            var back = [];
            if(end  > start){
                for (var ac = start; ac < end; ac += diff) {
                    back.push(ac);
                }
            }else{
               for (var a = start; a > end; a += diff) {
                    back.push(a);
                } 
            }
            return back;
        },
         //Assumes start is 0
        range4: function (end,diff) {
            var back = [];
           if(end  > 0){
                for (var ad = 0; ad < end; ad += diff) {
                    back.push(ad);
                }
            }else{
               for (var a = 0; a > end; a += diff) {
                    back.push(a);
                } 
            }
            return back;
        }
    }
    
})();

module.exports = Range;