// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var paper,dustbin1,dustbin2,dustbin3,ground,chain;
var world,engine;
/*
const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas =createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(620,450,1300,40);
    dustbin1= new Bricks(900,340,150,200);
    paper = new Ball(900,100,60,60);

}

function draw() {
// Remember to update the Matter Engine and set the background.
    background("white");
    Engine.update(engine);
    
    ground.display();
    dustbin1.display();
    paper.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.

}