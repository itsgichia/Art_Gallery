console.log("Gichia Muiruri")
console.log(6)
console.log(6.0)
var age = 25
let name = "Gichia"
const PI = 3.145

console.log(age,name,PI)
name = "kate"
age = 30
console.log(name,age)
let x = 12
let y = 30
let sum = x + y
console.log (sum)

// Given two variables
let a = 5;
let b = 7;

// Using a third variable to swap values
let temp = a;
a = b;
b = temp;

// Now, a should be 7 and b should be 5
console.log("After swapping (using a third variable):");
console.log("a =", a);
console.log("b =", b);

console.log(y)

let z = 20
if(z <= 18)
{
    console.log("Good day")
}
else if (z == 20)
{
    console.log("Time for dinner")
}
else (z < 18)
{
    console.log("Good night")
}

let result;

function getFee(isMember)
 {
    let fee;
    
    if (isMember) 
    {
        fee = 'Member should pay KES 500';
    } 
    else 
    {
        fee = 'Member should pay KES 1000';
    }

    return fee;
}
result = getFee(true);
console.log(result);

const printName = function(a,b)
{
    console.log(a,b)
}
printName("Gichia", "Muiruri")

const greet = () => 
{

}
greet()