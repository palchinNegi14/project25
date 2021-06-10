
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,600,700,20);

	//Create the Bodies Here.
	ball1= new Paper(300,400,10)
	

	box= new Box
	
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);

  
  
  ground.display();
  ball1.display();
  box.display();
 
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:120,y:-300});
		console.log(ball1.body.position)
	}
}


