
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;

function preload()
{
	treeImg=loadImage("tree.png")	
	boyImg=loadImage("boy.png")
	stoneImg=loadImage("stone.png")
}

function setup() {
	createCanvas(1000, 700);

	boy=createSprite(200,630,50,120)
	boy.addImage(boyImg)
	boy.scale=0.1
	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	var options={
		isStatic:true,
		
	}
	
	tree=Bodies.rectangle(500,10,10,10,options)
	World.add(world,tree)
	var options={
		isStatic:false,
		restitution:0,
		friction:1,
		density:1.2
		}
	stone=Bodies.rectangle(200,520,50,50,options)
		World.add(world,stone)
   var options={
	   isStatic:true
   }
   ground=Bodies.rectangle(500,680,1000,40,options)
	World.add(world,ground)
	mango1=new Mango(750,300,50,80)
	mango2=new Mango(750,150,50,80)
	mango3=new Mango(650,100,50,80)
	mango4=new Mango(750,150,50,80)
	mango5=new Mango(550,200,50,80)
	mango6=new Mango(650,350,50,80)
	mango7=new Mango(800,100,50,80)
	mango8=new Mango(850,300,50,80)
	launcher=new Launcher(stone,{x:120,y:520})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rectMode(CENTER)
  fill("brown")
  rect(ground.position.x,ground.position.y,1000,40)
 
  image(treeImg,tree.position.x,tree.position.y,500,750)
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  image(stoneImg,stone.position.x,stone.position.y,50,50)
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  drawSprites();
 
}
function detectCollision(stn,mng){
mangoPos=mng.body.position
stonePos=stn.position

var distance=dist(mangoPos.x,mangoPos.y,stonePos.x,stonePos.y)
console.log(distance)
if(distance<70){
		console.log("if")
	Body.setStatic(mng.body,false)
}
}
function mouseDragged(){
Body.setPosition(stone,{x:mouseX,y:mouseY})
}
function mouseReleased(){
launcher.fly();
}
function keyPressed(){
	if(keyCode===32){
		Body.setPosition(stone,{x:120,y:500})
		launcher.attach(stone)
	}
}



