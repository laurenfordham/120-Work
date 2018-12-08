let t = 0; // time variable
var value_1 = ('rgb(140, 255, 25)');
var value_2 = ('rgb(46, 227, 238)');
var value_3 = ('rgb(255, 0, 0)');
var value_4 = ('rgb(255, 107, 0)');
var value_5 = ('rgb(150, 23, 23)');
var value_6 = ('rgb(170, 107, 14)');




function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  noCursor();



}

function draw() {

  background(10, 30);

    // make a grid for ovals to stay within
    for (let x = 20; x <= width; x = x + 30) {
    for (let y = 20; y <= height; y = y + 30) {
    // make each staring point of ovals depend on mouse position
    let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
    let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);

    let angle = xAngle * (x / width) + yAngle * (y / height);

    // make each oval move in a circular motion
    let myX = x + 20 * cos(2 * PI * t + angle);
    let myY = y + 20 * sin(2 * PI * t + angle);

    // create ovals (make them continoulst change size)
    ellipse(myX, myY, random(5, 15), random(20, 30));
    fill(value_1)
  }
    //create bounds
    push()

      if (ellipse > height || ellipse < 0){
      ellipse *= -100;
      }
    //create Butterfly
        push()
          fill(value_3);
          stroke(value_5);
          strokeWeight(2);
          triangle (mouseX, mouseY, mouseX - 50, mouseY + 25, mouseX - 50, mouseY - 50);
          triangle (mouseX, mouseY, mouseX + 50, mouseY + 25, mouseX  + 50, mouseY - 50);
          triangle (mouseX, mouseY, mouseX - 50, mouseY +50, mouseX - 50, mouseY + 100);
          triangle (mouseX, mouseY, mouseX + 50, mouseY +50, mouseX + 50, mouseY + 100)
        pop()
          push()
            fill('rgb(231, 215, 70)');
            ellipse(mouseX , mouseY + 20, 10, 100);
          pop()
            push()
              fill('rgb(231, 198, 24)');
              ellipse(mouseX , mouseY + 20, 6, 80);
            pop()
              push()
                fill('rgb(220, 190, 241)');
                stroke('rgb(201, 235, 106)');
                ellipse(mouseX - 40, mouseY + 60, 10, 20);
                ellipse(mouseX + 40, mouseY + 60, 10, 20);
                ellipse( mouseX - 30, mouseY + 45, 5, 10);
                ellipse( mouseX + 30, mouseY + 45, 5, 10);
                ellipse(mouseX + 20, mouseY + 30, 3, 7);
                ellipse(mouseX - 20, mouseY + 30, 3, 7);
                ellipse( mouseX - 35, mouseY - 5, 20);
                ellipse(mouseX + 35, mouseY - 5, 20);
                ellipse(mouseX - 40, mouseY - 20, 10);
                ellipse(mouseX + 40, mouseY - 20, 10);
              pop()
                push()
                  fill(255);
                  ellipse(mouseX - 5 , mouseY - 30, 10);
                  ellipse(mouseX +5 , mouseY - 30, 10);
                pop()
                  push()
                    fill(0);
                    ellipse( mouseX - 5, mouseY - 30, 5);
                    ellipse( mouseX + 5, mouseY - 30, 5);
                  pop()
                    push()
                      noFill();
                      stroke(0);
                      strokeWeight(2);
                      arc(mouseX, mouseY - 10, 5, 5, 0, PI, OPEN);
                    pop()
                      push()
                        stroke('rgb(231, 198, 24)');
                        line(mouseX, mouseY - 30, mouseX - 10, mouseY - 70);
                        line(mouseX, mouseY - 30, mouseX + 10, mouseY - 70);
                        fill('rgb(231, 198, 24)');
                        ellipse(mouseX - 10, mouseY - 70, 6);
                        ellipse(mouseX + 10, mouseY - 70, 6);
                      pop()
                    }
  // update time variable
  t = t + 0.01;
}
// dependent on mouse click, change color of background and butterfly to be complementary
function mouseClicked() {
    if (value_1 === 'rgb(140, 255, 25)') {
      (value_1 = 'rgb(46, 227, 238)');
    } else {
      value_1 = ('rgb(140, 255, 25)');
    }

    if (value_3 === 'rgb(255, 0, 0)') {
      (value_3 = 'rgb(255, 107, 0)');
    } else {
      value_3 = ('rgb(255, 0, 0)');
    }
}
