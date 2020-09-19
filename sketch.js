const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;

var ground;

var ball,box1;

var box2;

var pig1,pig3,log1,log3,log4,log5,box3,box4,box5;

function setup() {
  createCanvas(1200,400);
  

  engine=Engine.create();
  world=engine.world;
  
  
box1=new Box(700,320,70,70);
ground=new Ground(200,390,400,20);
box2= new Box(920,320,70,70);
pig1=new Pig(810,350);
log1=new Log(810,260,300,PI/2);
}


function draw() {
  background(0); 
  Engine.update(engine);
  box1.display();
  ground.display();
  box2.display();
  pig1.display();
  log1.display();
}