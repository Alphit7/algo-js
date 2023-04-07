function rand10(){
    let x = Math.floor((Math.random() * 10) +1);
    return x;
}
let arr = [];
/*
* takes a number "n" as input
* pushes a random number from 1 to 10 in the "arr" array "n" times
*/
function multiRand(n){
        while(n > 0){
            arr.push(rand10());
            n = n-1;
        }
}
multiRand(prompt("Un nombre"));
alert(arr);
