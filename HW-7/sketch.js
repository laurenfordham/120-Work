
let ball = {};
ball.width = 40;
ball.x = 10;
ball.y = 10;
ball.delta_x = 1;
ball.delta_y = 1;
ball.scale_x = 1;
ball.scale_y = 1;
speed = 5
let x;
let y;
let ball2 = 0
function setup() {
    createCanvas(windowWidth, 400);
    background(255);
}

frameRate(20)

function draw() {


    ball.x += ball.delta_x * ball.scale_x;
    ball.y += ball.delta_y * ball.scale_y;


    if (ball.x >= width || ball.x <= 0) {
        ball.delta_x = -1 * ball.delta_x;
    }
    if (ball.y >= height || ball.y <= 0) {
        ball.delta_y = -1 * ball.delta_y;
      }

      if( ball.x >= width/2) {
         background( random(255), random(255), random(255) );
        }

 if (ball.x <= width/2) {
   fill(random(255), random(255), random(255))
 }


ellipse(ball.x, ball.y, ball.width, ball.width);
fill('rgb(255, 255, 255)')
}



function mousePressed() {
   ball.scale_x = map(mouseX, 0, width, 0.5, 10);
   ball.scale_y = map(mouseY, 0, height, 0.5, 10);
}
