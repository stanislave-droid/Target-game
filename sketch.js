let score = 0, radius = 100 , clicked = false, timerMode = false, bestResult = 0;
let timer = 30;

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
  text('Best result: ' + bestResult, width/2, height/10)
  text('Score: ' + score, width/2, height/2 - radius)
  text('Timer: ' + timer, width/2, height/6);
  text('Timer: ' + (timerMode ? 'on' : 'off'), width/2, height*0.9);
  if (clicked === false)
    fill(220,220,220);
  circle(width/2, height/2, radius);
  if(timerMode === true)
    Timer();
}

function mousePressed(){ scoreUpdate(); }
function keyPressed(){ 
  if (keyCode === 32)
    if (timerMode === true){
      timerMode = false;
    }
    else
      timerMode = true;
}

function scoreUpdate(){
  if (mouseX > width/2 - radius/2 && mouseX < width/2 + radius/2){
    if (mouseY > height/2 - radius/2 && mouseY < height/2 + radius/2){
      clicked = true;
      fill(0,0,0)
      if(timerMode === true)
        score++;
      setTimeout(function() { clicked = false; }, 150);
      timerMode = true
    } 
  }
}

function Timer(){
  
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
  if (timer === 0){
    timer = 30;
    timerMode = false;
    score = 0;
  }
  
  if (score > bestResult)
    bestResult = score;
}
