//crear un sprite de ovni
var sprite = createSprite(80, 350);
sprite.setAnimation("ducky_1");
sprite.scale = 0.2;
sprite.velocityY = -4;
var sprite_group = createGroup();

createEdgeSprites();
sprite_group.bounceOff(edges);


 for(var i=1; i<=4; i++)
  {
    var sprite = createSprite(80 * i, 350);
    sprite.setAnimation("ducky_1");
    sprite.scale = 0.2;
    sprite.velocityY = -4;
    sprite_group.add(sprite);
  }

function draw() {
  //establecer el fondo a blanco
  background("white");
  background("black");
  //dibujar los sprites en el canvas
  drawSprites();
  
  sprite_group.bounceOff(bottomEdge);
  sprite_group.bounceOff(topEdge);
  sprite_group.bounceOff(bottomEdge);
}


