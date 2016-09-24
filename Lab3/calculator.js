
var Calculator = function() {};

function isNumber(obj) { return (!isNaN(parseFloat(obj)))}

var result = 0;

Calculator.prototype.getResult = function() {
    console.log("Result = " + result);
};

Calculator.prototype.add = function(number) {
    if(isNumber(number))
    {
        result = result + number;
        return this;
    }
    else
    {
        throw new Error(number + " is not a number");
    }
};

Calculator.prototype.subtract = function(number) {
    if(isNumber(number)) {
        result = result - number;
        return this;
    }
    else
    {
        throw new Error(number + " is not a number");
    }
};

Calculator.prototype.divide = function(number) {
    if(isNumber(number) && number != 0) {
        result = result / number;
        return this;
    }
    else
    {
        if(!isNumber(number)) {
            throw new Error(number + " is not a number");
        }
        else if(number == 0) {
            throw new Error("unable to divide by 0");
        }
    }
};

Calculator.prototype.multiply = function(number) {
    if(isNumber(number)) {
        result = result * number;
        return this;
    }
    else
    {
        throw new Error(number + " is not a number");
    }
};

Calculator.prototype.cos = function(number) {
    if(isNumber(number)) {
        result = Math.cos(number);
        return this;
    }
    else
    {
        throw new Error(number + " is not a number");
    }
};

Calculator.prototype.sin = function(number) {
    if(isNumber(number)) {
        result = Math.sin(number);
        return this;
    }
    else
    {
        throw new Error(number + " is not a number");
    }
};

Calculator.prototype.tan = function(number) {
    if(isNumber(number)) {
        result = Math.tan(number);
        return this;
    }
    else
    {
        throw new Error(number + " is not a number");
    }
};

// test
var calcul = new Calculator();
calcul.add(2).divide(4).multiply(5).subtract(3).cos(45).getResult();
