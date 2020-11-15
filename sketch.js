const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(550,800);
  engine = Engine.create();
    world = engine.world;


    ground = new Ground(250,750,innerWidth,20);

    p1 = new Particle(200,200,20,20)
}

function draw() {
  background(0); 
  ground.display(); 
  p1.display();
  drawSprites();
}