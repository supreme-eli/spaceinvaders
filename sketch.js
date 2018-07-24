function setup(){
    createCanvas(1000,1000);
    background(0);
  textSize(20);
    text('word', 10, 30);
    fill("red")
    text('Score:', 10, 60);
    fill('red')
    text('High score', 10, 90);
    textSize(20); 
    text('space Invaders', 800, 100);
    fill(0, 102, 153, 51);
    text('space Invaders', 800, 100);

} 

var x = 100;
var y = 100;

functiondraw();{
   if (keyIsDown(LEFT_ARROW))
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();{
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
}
