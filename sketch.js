// TOP DOWN PLAYER
let player1, player2;
let teleport = false;
let score = 0;
let GREY = 80;
let BLACK = 0;
let circle, circle2, circle3, circle4;
// SETUP FUNCTION - Runs once at beginning of program
function setup() {
  createCanvas(800, 600);
  // Initialize Global Variables  
  player1 = new Player();
  player2 = new Player();
  circle = new Bouncing(400, 300, BLACK);
  circle2 = new Bouncing(400, 100, BLACK);
  circle3 = new Bouncing(400, 200, BLACK);
  circle4 = new Bouncing(400, 400, BLACK);
}

// DRAW FUNCTION - Loops @ 60FPS by default
function draw() {
  // LOGIC
  player1.move();
  circle.bounce();
  circle2.bounce();
  circle3.bounce();
  circle4.bounce();
  // DRAW
  background(140, 197, 66);
  player1.show();
  circle.show();
  circle2.show();
  circle3.show();
  circle4.show();
}

function keyPressed() {
  if(keyCode == 32) {
    Player1.teleport();
  }
}