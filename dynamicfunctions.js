function add(a, b){
    // declaring sum and intializing it with paramenters
    var sum = a + b;
    // returning sum to any calling function
    return sum;
}

function sub(){
    // assigning results with the value of function add - 5
    // calling function add and assinging it to the evaluation
    var result = add(5, 8) - 5;
    // printing the values of result
    console.log(result);
}
sub(); // evoking the fucntions