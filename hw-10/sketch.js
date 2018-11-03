
//define global variables
let pos_x = 0;
let pos_y = 0 + 10;
let diameter = 20;
let radius = diameter/2;

//define array for bouncing ellipse
var nums = [24, 36]

// add values for the variable ball
var ball = {
  x: 200,
  y:100,

  xspeed: 15,
  yspeed: 22
}

function setup(){
  createCanvas(windowWidth, windowHeight);

}

function draw() {
//use functions I created inside the draw functino so that the function continues to work
  move();
  bounce();
  background('rgb(50, 200, 241)')
    push()
    //add many circles along edges based on value i
    fill(255, 110, random(255));
      for(var i = 0; i < 20; i++) {
      pos_x = width * i/20 + radius ;
      ellipse(pos_x, pos_y, diameter)}
        push()
        for(var i = 0; i < 20; i++) {
        pos_x = width * i/20 + radius ;
        ellipse(pos_x, pos_y + 600, diameter)}
        pop()
    pop()



  strokeWeight(8);
  stroke('rgb(255, 255, 255)')
  fill(20, 180, random(180))
  //make ellipse with values from var ball and array nums
  ellipse(ball.x, ball.y, nums[0], nums[0]);
}



//create function for the movement of the ball
function move(){
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}
//create function for the bounce of the ball, so it stays in bounds
function bounce(){
  if (ball.x > width || ball.x < 0){
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0){
    ball.yspeed = ball.yspeed * -1;
  }

}
