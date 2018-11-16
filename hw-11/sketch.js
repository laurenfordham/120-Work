//define global variables
let monster = [];
let num_of_monster = 20;


function setup(){
  createCanvas(windowWidth, windowHeight);

//define new class
  for (let i = 0; i < num_of_monster; i++ ){
    monster.push( new MonstersWithFeet());

    //}
  }
}

function draw(){
  background('rgb(236, 162, 237) ')
//create monsters in frame
  for (var i = 0; i < monster.length; i++){
    monster[i].frame();
  }
}
//define class
class MonstersWithFeet {
//define objects within class
  constructor(){
    this.size_w = random(10, 100);
    this.size_h = random(10, 100);
    this.loc_x = random(windowWidth);
    this.loc_y = random(windowHeight);
    this.move_x = random(-10, 10);
    this.move_y = random(-10, 10);
    this.monster_color = color(255, random(255), random(255));
    this.size_w = this.size_w;
    this.size_h = this.size_h;


  }

  frame(){
// call functions
    this.display();
    this.move();
  }
  //creates the display of monsters
  display() {
    push();
    translate(this.loc_x, this.loc_y);
    fill(this.monster_color);
    ellipse(0, 0, this.size_w, this.size_h );

    push()
    //create feet
    line(0 - this.size_w/4, this.size_h/2, 0- this.size_w/4 , this.size_h);
    line(this.size_w/4 ,this.size_h/2, this.size_w/4, this.size_h );

    push()
    // create white of eyes
    fill(255);
    ellipse(-this.size_w * .05, this.size_h * .20, this.size_w/2, this.size_h/2);
    // create pupils
    push()
    fill(0)
    ellipse(-this.size_w * .15 / 2, this.size_h * .20 / 2, this.size_w/4, this.size_h/4);

    pop()
    pop()
    pop()
    pop()

  }
  // defines where the monsters will move
  move() {
    this.loc_x += this.move_x;
    this.loc_y += this.move_y;

    if (this.loc_x > width || this.loc_x < 0){
      this.move_x *= -1;
    }
    if (this.loc_y > height || this.loc_y < 0){
      this.move_y *= -1;
    }

  }
}
