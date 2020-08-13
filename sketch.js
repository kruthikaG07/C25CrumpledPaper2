
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,leftBar,rightBar,bottomBar,ground;
var engine,world;
function preload()
{

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,500,25);
	ground = new Ground(600,height,1200,20);
	leftBar = new Dustbin(610,580,20,200);
	rightBar = new Dustbin(710,580,20,200);
	bottomBar = new Dustbin(660,550,100,20);

	leftBar = Bodies.rectangle(610,580,20,200,{isStatic:true});
	World.add(world,leftBar);
	rightBar = Bodies.rectangle(710,580,20,200);
	World.add(world,rightBar);
	Engine.run(engine); 
	
}

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  paper1.display();
  ground.display();
  bottomBar.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:70,y:-150})
	}
}


