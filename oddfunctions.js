function odd(a, b){
    for(let item = a; item <= b; item++){
        if (item % 2 != 0){
            console.log(item);
        }
    }
}
odd(0 , 20);