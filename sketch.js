var runner, runner_running;
var path, pathImage, invisLeft, invisRight;

function preload(){
  //pre-load images
    runner_running = loadAnimation("Runner-1.png","Runner-2.png")
    pathImage = loadImage("path.png")
    coinImage = loadImage("coin.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(200,250,20.50);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.075;

  invisLeft = createSprite(-20, 370, 100, 800);
  invisLeft.visible = false

  invisRight = createSprite( 430, 370, 100, 800)
  invisRight.visible = false


}

function draw() {
  background(0);
  //move right when right arrow pressed
  runner.x = World.mouseX;


  
  if(path.y > 400){
    path.y = path.height/4;
  }
  
  runner.collide(invisRight);
  runner.collide(invisLeft);
  drawSprites();

}
