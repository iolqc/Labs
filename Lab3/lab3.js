/**
 * Created by iOL on 2016-09-21.
 */
function isNumber(obj) { return !isNaN(parseFloat(obj)) }

var Calculator = function() {
    this.total = 0;
    this.add = function(ammount) {
        if(isNumber(ammount))
        {
            this.total = this.total + ammount;
            return this;
        }
        else
        {
            console.log(ammount + " is not a number");
        }
    };
};

var test = new Calculator();
test.add(1).add(1).add(1);
console.log("Total : " + test.total);