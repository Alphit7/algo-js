function calcDistance(x1, x2, y1, y2){
    x = x2 - x1;
    y = y2 - y1;
    dx = x*x;
    dy = y*y;
    dis= Math.sqrt(dx+dy);
    return dis;
}
calcDistance(prompt("x1"),prompt("x2"),prompt("y1"),prompt("y2"));
alert(dis);