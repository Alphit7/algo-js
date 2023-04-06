function rand10(){
    let x = Math.floor((Math.random() * 10) +1);
    return x;
}
let arr = [];
function multiRand(n){
        while(n > 0){
            arr.push(rand10());
            n = n-1;
        }
}
multiRand(prompt("Un nombre"));
alert(arr);