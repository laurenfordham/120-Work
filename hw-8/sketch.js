//define global variables
let pos_x = 0;
let pos_y = 0 + 10;
let diameter = 20;
let radius = diameter/2;
let windowWidth = 1280
let windowHeight = 634

//setup canvas and background
function setup (){
  createCanvas(windowWidth, windowHeight);
  background('rgb(206, 190, 247)');

}

//create drawing
function draw(){

  //make color of the circles
  fill(255, 110, random(255));

  //remove outline
noStroke();

//create first row of circles using for loop
for(var i = 0; i < 20; i++) {
      pos_x = width * i/20 + radius ;
      ellipse(pos_x, pos_y, diameter)}

          // second row of circles
        for(var i = 0; i < 20; i++)   {
            pos_x = width * i/20 ;
            ellipse(pos_x,pos_y + 10, 20)  }

            //thrid row of circles
              for(var i = 0; i < 20; i++) {
                pos_x = width * i/20 + radius ;
                ellipse(pos_x, pos_y + 20, diameter)}

                //fourth row of circles
                  for(var i = 0; i < 20; i++)   {
                      pos_x = width * i/20 ;
                      ellipse(pos_x,pos_y + 30, 20)}

                      //bottom, first row of circles
                      for(var i = 0; i < 20; i++) {
                        pos_x = width * i/20 + radius ;
                        ellipse(pos_x, pos_y + 600, diameter)}

                          //bottom, second row
                            for(var i = 0; i < 20; i++)   {
                              pos_x = width * i/20 ;
                              ellipse(pos_x,pos_y + 590, 20)}

                                //bottom, third row
                                for(var i = 0; i < 20; i++) {
                                  pos_x = width * i/20 + radius ;
                                  ellipse(pos_x, pos_y + 580, diameter)}

                                    //bottom, fourth row
                                    for(var i = 0; i < 20; i++)   {
                                      pos_x = width * i/20 ;
                                      ellipse(pos_x,pos_y + 570, 20)}

    push()
      fill(255, 240, random(255))
      triangle(windowWidth/2, windowHeight/4, windowWidth/4, windowHeight/2, windowWidth - windowWidth/4, windowHeight/2)
        push()
        fill(100, 30, random(255))
        triangle(windowWidth/8 - 50, windowHeight/4, windowWidth/3 +150 , windowHeight/4, windowWidth/4- 5, windowHeight/2 )
        triangle(windowWidth- windowWidth/10 , windowHeight/4, windowWidth- 575, windowHeight/4, windowWidth/2 +windowWidth/4 , windowHeight/2)
        pop()
        pop()

  }

  
