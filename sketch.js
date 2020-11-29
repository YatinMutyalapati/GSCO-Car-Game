var wall, thickness
var bullet, speed, weight
var damage
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  wall=createSprite(1200, 200, thickness, height/2);
  speed=random(223,321);
  weight=random(30,52);
}

function draw() {
  background(255,255,255);  
  if (bullet.isTouching(wall)){
    bullet.velocityX=0;
    bullet.velocityY=0;
  }
  if (damage>10){
    
  }
  drawSprites();
}