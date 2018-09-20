function setup() {
    // create a canvas to draw my portrait on
    createCanvas( 1000, 1000 );

    // set the background color
    background( 'rgb(255, 239, 193)' );
}
function draw(){
  //draw body
  fill('green')
  rect (120, 100, 500, 500, 100)
  //add white of eyes
fill('white')
stroke ('green')
ellipse ( 500, 250, 100, 100 )
ellipse ( 250, 250, 100, 100 )
//add pupil of eyes
fill ('black')
ellipse ( 500, 250,  50, 50 )
ellipse ( 250, 250, 50, 50 )
//add mouth
fill ('red')
ellipse( 380, 400, 300, 30)
//add monster teeth
fill ('white')
triangle(400, 386, 450, 386, 420, 430)
triangle(275, 390, 325, 385, 310, 430)
//add tongue
fill ('pink')
triangle(350, 390, 390, 390, 350, 750)
//ears
stroke('purple')
fill('purple')
ellipse(120, 100, 200, 200)
ellipse(600, 100, 200, 200)
fill('pink')
ellipse( 120, 100, 100, 100)
ellipse( 600, 100, 100, 100)
//arms
fill('green')
stroke('yellow')
rect( 20, 400, 100, 10, 5)
rect( 20, 300, 100, 10, 5)
rect (20, 500, 100, 10, 5)
rect(620, 400, 100, 10, 5)
rect(620, 300, 100, 10, 5)
rect(620, 500, 100, 10, 5)
//hands
fill('purple')
ellipse(720, 300, 50, 50)
ellipse(720, 400, 50, 50)
ellipse(720, 500, 50, 50)
ellipse(20, 300, 50, 50)
ellipse(20, 400, 50, 50)
ellipse(20, 500, 50, 50)
}
