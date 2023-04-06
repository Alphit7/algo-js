let x = prompt("What's your favorite number ?");
for (x; x != 42; x = prompt("What's your favorite number ?")){
alert("Are you sure ?");
}
if (x == 42){
    alert("I knew it");
}