var wall1 = createSprite(190,120,250,3);
var wall2 = createSprite(190,260,250,3);
var wall11 = createSprite(66,190,3,140);
var wall12 = createSprite(313,190,3,140);
  
  
var dong1 = createSprite(185,185,10,10);
dong1.shapeColor = "red";
var dong2 = createSprite(100,185,10,10);
dong1.shapeColor = "blue";
 
dong1.velocityY = 8;
dong2.velocityX = 8;
  
  


function draw() {
  background("white");
  
  dong1.bounceOff(wall1);
  dong1.bounceOff(wall2);
  dong1.bounceOff(wall11);
  dong1.bounceOff(wall12);
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2);
  dong2.bounceOff(wall11);
  dong2.bounceOff(wall12);
  
 
  if(keyDown("right")){
    ding.x = ding.x + 50;
  }
  if(keyDown("left")){
    ding.x = ding.x - 29;
  }
  
  
 drawSprites();
}

