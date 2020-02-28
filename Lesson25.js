
//1
var rangeOfArray = _.range(-50,30,4);
console.log(rangeOfArray);
var textHTML = JSON.stringify(rangeOfArray);
document.getElementById("array").innerHTML = textHTML;


//2
var shuffleArray = _.shuffle(rangeOfArray);
console.log(shuffleArray);
textHTML = JSON.stringify(shuffleArray);
document.getElementById("shuffleArray").innerHTML = textHTML;


//3
var minValue = _.min(shuffleArray);
var maxValue = _.max(shuffleArray);
console.log(minValue+'  '+maxValue);
document.getElementById("minValue").innerHTML = minValue;
document.getElementById("maxValue").innerHTML = maxValue;

var IndexMinValue = _.indexOf(shuffleArray, minValue);
console.log(IndexMinValue);
document.getElementById("IndexMinValue").innerHTML = IndexMinValue;


var IndexMaxValue = _.indexOf(shuffleArray, maxValue);
console.log(IndexMaxValue);
textHTML = JSON.stringify(IndexMaxValue);
document.getElementById("IndexMaxValue").innerHTML = textHTML;
