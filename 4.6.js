let sum = 1;
function factorial(a) {
    if(a == 0){
        return 1;
    }
    else {
    let x = a;
    sum = sum * x;
    factorial(a-1);
    return sum;
    }
}
factorial(0);
alert(sum);