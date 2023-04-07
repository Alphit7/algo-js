/*
* The fuction takes four inputs
* @input1 x position of the first point "x1"
* @input2 x position of the second point "x2"
* @input3 y position of the first point "y1"
* @input4 y position of the second point "y2"
* substracts the first x postion of the second position to get their distance "x"
* substracts the first y postion of the second position to get their distance "y"
* squares the two distances "dx" and "dy"
* square roots the addition of the results to get the distance between the to points "dis"
*/
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