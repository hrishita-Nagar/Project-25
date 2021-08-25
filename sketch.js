
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	dustbin1 = new Dustbin(725,800,250,290);
	
	wall1 = new Ground(624,540,25,280);
	wall2 = new Ground(823,540,25,280);

	ground = new Ground(500,675,1000,20);

	ball = new Ball(33,553,75,75);

	wall3 = new Ground(890,170,20,1000);
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  wall1.display();
  wall2.display();

  ball.display();

  dustbin1.display();

  ground.display();

  wall3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		 
		Matter.Body.applyForce(ball.body,ball.body.position,{x:200,y:-218})
	}
}



