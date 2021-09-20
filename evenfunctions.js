function even(a, b){
    for (let item = a; item <= b; item++){
        if (item % 2 == 0){
            console.log(item);
        }
    }
}
even(0, 11);

function even2 (){
    for (let item = 0; item <= 11; item += 2){
        console.log(item);
    }
}
even2();

