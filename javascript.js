var displaystring = "";
var numbers = ["", ""];
var currNum = 0;
var currFunc = 0;
var calculations = [(x, y) => x, (x, y) => x*y, (x, y) => x/y, (x, y) => x + y, (x, y) => x-y];
var dotted = false;

function typeNum(n) {
    numbers[currNum] += n;
    displaystring += n;
    document.getElementById("Screen").textContent = displaystring;
}

function dot()  {
    if  (!dotted)   {
        typeNum(`.`);
        dotted = true;
    } 
}

function enter()    {
    if  (numbers[1] == 0 && currFunc == 2)  {
        outstr = "Bruh divide by zero for what."
    } else {
        var outstr = calculations[currFunc](parseFloat(numbers[0]), parseFloat(numbers[1]));
    }
    setToDefault();
    document.getElementById("Screen").textContent = outstr;
    return outstr;
}

function setToDefault() {
    displaystring = "";
    numbers = ["", ""];
    currNum = 0;
    currFunc = 0; 
    dotted = false;
    document.getElementById("Screen").textContent = displaystring;  
}

function apply(str) {
    if  (currFunc != 0)  {
        let firstNum = enter();
        displaystring = firstNum;
        numbers[0] = firstNum;
    }
    if  (str == 'x')   {
        currFunc = 1;
    } else if   (str == '/')    {
        currFunc = 2;
    } else if   (str == '+')    {
        currFunc = 3;
    } else if   (str == '-')    {
        currFunc = 4;
    }
    displaystring += str;
    currNum = 1;
    document.getElementById("Screen").textContent = displaystring;
}