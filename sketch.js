
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var Juno;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var launcher;

function preload(){
	Juno = loadImage("boy.png");
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(650, 590, 1300, 20);
	tree = new Tree(1050, 580)
	mango1 = new Mango(1100, 100, 30);
	mango2 = new Mango(1170, 130, 30);
	mango3 = new Mango(1010, 140, 30);
	mango4 = new Mango(1100, 70, 30);
	mango5 = new Mango(1000, 230, 30);
	mango6 = new Mango(900, 230, 40);
	mango7 = new Mango(1140, 150, 40);
	mango8 = new Mango(1100, 230, 40);
	mango9 = new Mango(1200, 200, 40);
	mango10 = new Mango(900, 160, 40);
  stone = new Stone(235, 420, 30);
  launcher = new Launcher(stone.body, {x: 235, y: 420});

	Engine.run(engine);
}


function draw() {

  background("lightblue");

  image(Juno, 200, 340, 200, 300);

  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  launcher.display();

  detectcollision(stone, mango1);
  detectcollision(stone, mango2);
  detectcollision(stone, mango3);
  detectcollision(stone, mango4);
  detectcollision(stone, mango5);
  detectcollision(stone, mango6);
  detectcollision(stone, mango7);
  detectcollision(stone, mango8);
  detectcollision(stone, mango9);
  detectcollision(stone, mango10);
  
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition (stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
  launcher.fly();
}

function detectcollision(stone, mango){
  mangoPosition = mango.body.position;
  stonePosition = stone.body.position;
  var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y);
  if(distance<=mango.r+stone.r){
    Matter.Body.setStatic(mango.body, false);
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body, {x: 235, y:420});
    launcher.attach(stone.body);
  }
}