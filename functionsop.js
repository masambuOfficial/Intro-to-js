function myFunction(){
    let count = 10;
    for( var item = 0; item <5; item+=2){
        console.log("item", item);
    }
}
myFunction();
console.log(item);

// How to access variables in a function

function add(){
    let num1 = 10, num2 = 20;
    let ans = num1 + num2;
    return num1;
    // console.log(ans);
}
add();
console.log(add());
// parameters
function sub(a, b){
    let ans = a - b;
    return ans; // allows you to access a variable with in a function
}
console.log(sub(2, 5));

// // Dynamic Functions
