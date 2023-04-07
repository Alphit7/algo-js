function askTvSerie(){
    let name = prompt("Name of you favorite show");
    let year = prompt("The year it was produced");
    let cast = [];
    while(true){
        let member = prompt("An actor you know from it(leave blank top stop)"); 
        if(member ==""){
            break;
        }
        cast.push(member);
    }
    return {
        name,
        year,
        cast
    };
}
let favorite = askTvSerie();
alert(JSON.stringify(favorite));
console.log (favorite);