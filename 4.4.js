let learners = ["Abel", "Alexandra","Anthony","Benjamin","Bruno","Delphine","Emilien","Ethan","Ismaël","Jodie","Julien","Louka","Loïc","Luciano","Marine","Nikko","Noa","Steve","Sylvain","Willy"]
let list = [];
/*
* takes 2 inputs
* @input1 the you want to push from
* @input2 the number of names you want to pick
* the function takes random names from an array and pushes them to another array
* returns the "list" array
*/

function pickLearner(inputAr, n){
    while(n > 0){
        list.push(learners[Math.floor(Math.random() * learners.length)]);
        n -= 1;
    }
    return list;
}
pickLearner(learners, prompt("A number between 1 and 21"));
alert(list);