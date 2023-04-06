let num = [1,2,3,4,5];
y = 0;
for(let i=0; i < num.length; i += 1){
 y = num[i] + y
}
console.log(y);

let x = [100, 101, 102];
let n = 0;
for(let sum of x){
    n = sum + n;
}
console.log(n);