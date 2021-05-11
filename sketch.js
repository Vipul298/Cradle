
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1300,20);

	bob1 = new Bob(600,300,40);
	bob2 = new Bob(555,300,40);
	bob3 = new Bob(510,300,40);
	bob4 = new Bob(645,300,40);
	bob5 = new Bob(690,300,40);

	roof = new Roof(600,100,300,90.30);
	World.add(world,roof);

	rope1 = new Rope(bob1.body,roof.body,-1,0);
	World.add(world,rope1);

	rope2 = new Rope(bob2.body,roof.body,-45,0);
	World.add(world,rope2);

	rope3 = new Rope(bob3.body,roof.body,-90,0);
	World.add(world,rope3);

	rope4 = new Rope(bob4.body,roof.body,+45,0);
	World.add(world,rope4);

	rope5 = new Rope(bob5.body,roof.body,+90,0);
	World.add(world,rope5);

	

	Engine.run(engine);
  
}


function draw() {
  background("white");	
  rectMode(CENTER);

  ground.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-50,y:-45});
	}
}



