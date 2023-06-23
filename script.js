let num=[1,2,3,4,5,6,7,8,];
let num1=[1,2,3,4,];
let num2 = num.concat(num1);
let num3 = num2.splice(0, 0, 0);
alert(num2);
num2.pop();
num2.shift();
alert(num2);
