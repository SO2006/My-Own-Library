var movingRect, fixedRect, rect1, rect2;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 30, 80);
  fixedRect = createSprite(400, 100, 50, 50);
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "blue";
  movingRect.debug = true;
  fixedRect.debug = true;
  rect1 = createSprite(100, 100, 50, 50);
  rect2 = createSprite(100, 300, 50, 50);
  rect1.shapeColor = "white";
  rect2.shapeColor = "green";
  //rect1.velocityX = 3;
  //rect2.velocityX = -3;
  rect1.velocityY = 3;
  rect2.velocityY = -3
}

function draw() {
  background(0,0,0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
 if(isTouching(movingRect, rect1))
 {
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
    text("Yay!!!!", 200, 200)
 }
  else{
    movingRect.shapeColor = "red";
    rect1.shapeColor = "blue";
  }

  bounceOff(rect1, rect2);

  drawSprites();
}