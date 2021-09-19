var kid
var kkid
var tracc
var bomb
var coin
var energy
var power
var rack
var lb
var rb
function preload(){
  //pre-load images
kkid=loadAnimation("Runner-1.png","Runner-2.png")
bomb=loadAnimation("bomb.png")
  coin=loadAnimation("coin.png")
  energy=loadAnimation("energyDrink.png")
  power=loadAnimation("power.png")
  tracc=loadImage("path.png")
}

function setup(){

  createCanvas(400,400);
  //wal=createEdgeSprites()
  

  rack=createSprite(200,200,400,400)
  rack.addImage(tracc)
kid=createSprite(100,350,10,10) 
kid.addAnimation("pic",kkid)
kid.scale=.05
boom=createSprite(100,100)
boom.addAnimation("pic",bomb)
boom.scale=.1
moni=createSprite(100,300,)
moni.addAnimation("pic",coin)
moni.scale=.4
nerji=createSprite(100,250)
nerji.addAnimation("pic",energy)
nerji.scale=.1
donda=createSprite(100,200)
donda.addAnimation("pic",power)
donda.scale=.2
rack.velocityY=54
rb=createSprite(380,200,100,400)
lb=createSprite(20,200,100,400)
//f (rack.y >0){
  //rack.y = 200; }

}

function draw() {
 background("black")

if (rack.y>400){
  rack.y=0

}
kid.x=mouseX
kid.collide(lb)
kid.collide(rb)
lb.visible=false
rb.visible=false
drawSprites()
}

