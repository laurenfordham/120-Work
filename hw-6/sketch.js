let circle_size1;
let circle1_min = 0;
let circle1_max;

let circle_size2;
let circle2_min = 0;
let circle2_max;

let left_side;
let right_side;

let circle_size3;
let circle3_min = 0;
let circle3_max;

let circle_size4;
let circle4_min = 0;
let circle4_max;
let windowWidth = 1000



function setup(){
  createCanvas(1000, 700);

  background('rgb(0, 0, 0)');
  left_side = 300;
  right_side = windowWidth - 300;
  circle1_max = windowWidth - 700;
  circle2_max = windowWidth - 700;
  circle3_max = windowWidth - 900;
  circle4_max = windowWidth - 900;



}
var circle = {
  x: 0,
  y: 0,
  diameter: 10
};

var circle2 = {
  x: 1000,
  y: 0,
  diameter: 10
};
var circle3 = {
  x: 1000,
  y: 800,
  diameter: 10
};
var circle4 = {
  x: 0,
  y: 800,
  diameter: 10
};
function draw() {
  fill('rgb(114, 249, 14)')
    ellipse(circle.x, circle.y, circle.diameter)
    circle.y += 1
    circle.x += 1
    fill('rgb(114, 249, 14)')
      ellipse(circle2.x, circle2.y, circle2.diameter)
      circle2.y += 1
      circle2.x -= 1
  fill('rgb(114, 249, 14)')
    ellipse(circle3.x, circle3.y, circle3.diameter)
    circle3.y -= 1
    circle3.x -= 1
  fill('rgb(114, 249, 14)')
    ellipse(circle4.x, circle4.y, circle4.diameter)
    circle4.y -= 1
    circle4.x += 1

  let left_side = 300;
  let right_side = windowWidth - 300;

  let x1 = constrain( mouseX, left_side, right_side);
  let circle_size1 = map( mouseX , windowWidth*.5, width, circle1_min, circle1_max );
  fill ('rgb(255, 0, 0)');
  ellipse( x1, 550, circle_size1);
  let circle_size2 = map( mouseX , windowWidth/2, width, circle2_min, circle2_max );
  fill('rgb(255, 252, 4)');
  ellipse( x1, 250, circle_size2);

    push()
      let circle_size3 = map( mouseX, windowWidth/2, width, circle3_min%3, circle3_max );
      fill('rgb(43, 0, 255)');
      ellipse ( mouseX, 150, circle_size3);
      let circle_size4 = map(mouseX, windowWidth/2, width, circle4_min%3, circle4_max );
      ellipse(mouseX, 650, circle_size4 );

    pop()
    fill('rgb(255,255,255)')
    translate(500, 425)
    let quad_x1 = random()
    let quad_y1 = random()
    quad( quad_x1, quad_y1,  -100, 0, 0, -100, 100, 0)
    push()






    }
