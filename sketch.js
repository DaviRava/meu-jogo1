var aviao, pinto, pinto2, pinto3;
var aviaoImg, pintoImg, pinto2Img, pinto3Img;
var pintoG;
var resetar, restart;

var gameState = "playing"



function preload(){
aviaoImg = loadImage("aviao.png");
pintoImg = loadImage("pinto.png");
pinto2Img = loadImage("pinto2.png");
pinto3Img = loadImage("pinto3.png");
restart = loadImage("restart.png")

}

function setup(){
    createCanvas(600,600);
    aviao = createSprite(300, 400);
    aviao.scale= 0.2
    aviao.addImage("aviaoImg",aviaoImg);
    aviao.debug=false
    aviao.setCollider("rectangle",0,0,150,350,0)
    
    resetar = createSprite(300, 250)
    resetar.addImage("restart", restart);
    resetar.visible = false
    resetar.scale = 0.5
    
    pintoG= new Group()

}
function draw() {
  background("LightBlue");
  drawSprites()

  if(gameState === "playing"){
 
 aviao.x = World.mouseX;
 aviao.y = World.mouseY;
 edges= createEdgeSprites();
 

 
 var select_sprites = Math.round(random(1,3));
 console.log(select_sprites)
 if (frameCount % 15 == 0) {
    if (select_sprites == 1) {
     createPinto();
    } else if (select_sprites == 2) {
    createPinto2();
   }else {
     createPinto3();
   }
  }
  
  if(pintoG.isTouching(aviao)) {
    gameState= "youdeath";

  }
}
else if (gameState === "youdeath"){
  resetar.visible = true
  console.log("sla")
  pintoG.setVelocityYEach(0)
  pintoG.setLifetimeEach(-1)
  
  
  
  
  if (mousePressedOver(resetar)) {
    resetall()
    }
}
 
}

function createPinto() {
    pinto = createSprite(random(50, 550),40, 10, 10);
    pinto.addImage(pintoImg);
    pinto.scale=0.05;
    pinto.velocityY = 3;
    pinto.lifetime = 300;
    pintoG.add(pinto)
    pinto.debug=false  
    
    }
    
function createPinto2() {
    pinto2 = createSprite(random(50, 550),40, 10, 10);
    pinto2.addImage(pinto2Img);
    pinto2.scale=0.08;
    pinto2.velocityY = 3;
    pinto2.lifetime = 300;
    pintoG.add(pinto2)
    pinto2.debug=false
    }
    
function createPinto3() {
    pinto3 = createSprite(random(50, 550), -15, 10, 10);
    pinto3.addImage(pinto3Img);
    pinto3.scale=0.075;
    pinto3.velocityY = 3;
    pinto3.lifetime = 300;
    pintoG.add(pinto3)
    pinto3.debug=false
    
    }
    function resetall(){
      gameState = "playing"
      resetar.visible = false
      pintoG.destroyEach()
      
    }
    




