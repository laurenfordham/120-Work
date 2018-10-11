Lauren Fordham, Section 50

(I have emailed Quinn about the linking process, I have been doing it wrong this whole time, I will link it as soon as possible.)


# HW 7 | Describe then Alter the Bouncing Ball

## Description of What the Original Code is Doing

<!--
The orignial code is creating a ball that moves around the screen at various rates. Everytime the mouse is clickd the rate changes. The main thing about this sketch is the ball moves, but it stays inside the screen at all times.

Lines 3-10 are defining Global Variables that will be used throughout the sketch. Lines 12-15 are setting up a specificly sized canvas and the color of the background. Lines 19-33 is actually the part that matters most.Lines 21&22 set up values for ball.x using varibles aready designated. Lines 25-127 use an if statement to say if ball.x is greater than to equal to the width, and ball.x is less than or equal to 0, then ball.delta_x, a variable previosly defined is equal to  -1 multiplied by ball.delta_y. Same goes for lines 28&29 except using different guidelines.Lines 32 & 33 create the circle and the color it is. Lines 36-39 are desribing the terms on which when the mouse is pressed under these conditions, the ball.scale x & y will change. We see this as the ball moves differently everytime we click.

The ball can change direction by using a variable to tell the ball once at a certain point you need to stop what path you were following and follow this one. So saying once a ball gets to 400, we can use a variable (already defined to make it go forward) and redefine it as a negative integer to make it go backwards. The direction of the ball itself on terms of place on canvas depend on what numbers you put in the path for your ball to take.


-->


## How did you alter the sketch?

<!--
I altered the sketch by adding a flashing background using an if statement that says if ball x is greather than or equal to half the width, then the background color will change using the random() color generator. I also changed the color of the ball from being random to white when it hits the same line as the when the backgrounf changes. I also used an if statement; if ball.x is less than or equal to width/2 then the ball with be ramdomly colored.
-->
