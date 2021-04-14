var sea;
var seaImage; 
var ship, ship_floationg, shiplightOn;
//load images and animations for ship and sea
function preload(){
  seaImage = loadImage("sea.png");
  ship_floationg = loadAnimation("ship-1.png","ship-2.png");
  shiplightOn = loadAnimation("ship-3.png","ship-4.png");
}

function setup(){
  //create canvas
  createCanvas(400,400);
  //create sea sprite
  sea = createSprite(500, 200, 400, 400);
  sea.addImage("seaImage", seaImage);
  sea.velocityX = -3;
  sea.scale = 0.25;
  //create ship sprite
  ship = createSprite(200, 200);
  ship.addAnimation("ship_floating", ship_floationg);
  ship.scale = 0.25;
}

function draw() {
  //create background
  background("blue");
  //make sea look infinite
  if(sea.x < -120){
    sea.x = sea.width/8;
  }
  //turn on ship beacon when space is pressed
  if(keyDown("space")){
    ship.addAnimation("shiplightOn", shiplightOn);
  }
  //drawsprites
  drawSprites();
}