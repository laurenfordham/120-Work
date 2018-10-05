function setup () {
  createCanvas( windowWidth, windowHeight);
  //create canvas based on the size of browser.
}
//set up variables
let armwave = 0
let headwidth = 400
let headheight = 300

//set up background and draw function
function draw (){
  background('rgb(164, 226, 209)');
  //make background light blue
  noCursor()
  //remove cursor
  // creature sandbox
    push();
    // head/body
      //translate( mouseX, mouseY );
      fill('rgb(195, 64, 226)');
      stroke('rgb(131, 10, 173)');
      ellipse(300 , 160, headwidth, headheight);

        push();

          fill('white')
        // MAKE EYES WHITE
          stroke('rgb(131, 10, 173)');
          strokeWeight(5);
        //make stroke purple
          ellipse(300, 100, 100, 100 );
        // create eyes
          ellipse(400, 100, 100, 100);

            push();
            //translate( mouseX, mouseY );
            // make pupils follow mouse
              fill('black')
              stroke('black')
            //make pupils black
              ellipse(300, 98, 50, 50);
            //make pupils
              ellipse(400, 98, 50, 50);

                push();
                //create smile
                noFill();
                arc(350, 200, 50, 50, 0, PI, OPEN);

                    push();
                      // make ears
                      stroke('rgb(131, 10, 173)')
                      fill('rgb(195, 64, 226)');
                      ellipse(180, 90, 60, 80);
                      ellipse(500, 90, 60, 80);
                      fill('rgb(201, 114, 182)');
                      ellipse(180, 100, 30, 50);
                      ellipse(500, 100, 30, 50);
                        push();
                        
                        //make arms

                          line(490, 200, 550, 200);
                          line(150, 200, 210, 170);

                          push();
                          //make arms move

                            line(550, 200, mouseX, 150);
                            line(150, 200, mouseX, 280);
                            //make hands move with arms
                              push();
                              stroke('rgb(131, 10, 173)')
                                fill('rgb(195, 64, 226)');
                                ellipse(mouseX, 150, 40, 30);
                                ellipse(mouseX, 280, 40, 30);
                                //make fingers on left hand
                                ellipse(mouseX, 250, 10, 30);
                                ellipse(mouseX - 20, 260, 10, 30);
                                ellipse(mouseX + 20, 260, 10, 30);
                                //make fingers on right hand
                                ellipse(mouseX, 120, 10, 30);
                                ellipse(mouseX - 20, 130, 10, 30);
                                ellipse(mouseX + 20, 130, 10, 30);

                                  push();
                                    //make feet
                                    ellipse(400, 320, 70, 50);
                                    ellipse(200, 320, 70, 50);

                                      push();

                                      // make toes, right foot
                                        fill('rgb(157, 212, 31)')
                                        ellipse (400, 355, 20, 20);
                                        ellipse(440, 340, 20, 20);
                                        ellipse(360, 340, 20, 20);
                                        //make toes, left foot
                                        ellipse(200, 355, 20, 20);
                                        ellipse(240, 340, 20, 20);
                                        ellipse(160, 340, 20, 20);


                  pop();






    pop()


  pop()

pop()

}
