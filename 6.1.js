class circle{
    constructor(xPos, yPos,radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset){
        this.xPos = xOffset;
        this.yPos = yOffset;
    }
    get surface(){
        return (this.radius * this.radius) * 3.14;
    }
}
let circle1 = new circle(4, 7, 20);
circle1.move(7,4);
console.log(circle1);
console.log(circle1.surface);