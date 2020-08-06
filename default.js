function add(num1, num2){
    return num1 + num2;
}
const result = add(20, 30);
console.log(result)

//default parameter

function add (num3, num4){
    if(num4 == undefined){
        num4 = 0;
    }
    return num3 + num4;
}
const result2 = add(50);
console.log(result2)


//default parameter another way

function add2(num5, num6){
    num6 = num6 || 0;
    return num5 + num6;
}
const result3 = add2(30);
console.log(result3)


//default parameter with ES6

function add3(num7, num8 = 20){
    return num7 + num8;
}
const result4 = add3(70);
console.log(result4)