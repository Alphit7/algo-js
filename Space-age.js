let Earth = 31557600;
let Mercury = 0.2408467 * Earth;
let Venus = 0.615197226 * Earth;
let Mars = 1.8808158 * Earth;
let Jupiter = 11.862615 * Earth;
let age;
function spaceAge(seconds,planet){
    let age = seconds / planet;
    return age;
}
console.log(spaceAge(31557600, Mercury));
