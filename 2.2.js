let min = prompt("min");
let max = prompt("max");
let current = prompt("current");
if ((current > min) && (current < max)){
    alert("You got it!");
} else if(min > max) {
    alert("The hell is wrong with you you nobhead ?!");
    close(window);
} else if ((min === max) && (min === current)){
    alert("Nice try smartass");
}