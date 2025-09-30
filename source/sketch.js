let score = 0, radius = 100 , clicked = false;

function setup() {
  createCanvas(600, 400);
  noStroke();
  noFill();
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  stroke('gray')
  textWidth(18);
  fill(0,0,0)
  text('Score: ' + score, width/2, height/2 - radius)
  if (clicked === false)
    fill(220,220,220);
  circle(width/2, height/2, radius);
}

function mousePressed(){ scoreUpdate(); }

function scoreUpdate(){
  if (mouseX > width/2 - radius/2 && mouseX < width/2 + radius/2){
    if (mouseY > height/2 - radius/2 && mouseY < height/2 + radius/2){
      clicked = true;
      fill(0,0,0)
      score++;
      setTimeout(function() { clicked = false; }, 150);
    } 
  }
}
