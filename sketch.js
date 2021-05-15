const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(190, 550,15)
    rubber2 = new Rubber(210, 550,15)
    rubber3 = new Rubber(230, 550,15)
    rubber4 = new Rubber(300, 550,50)
    rubber5 = new Rubber(200,550,15)
    stone1 = new Stone(500,550)
    iron1 = new Iron(400,550)
    fill ("yellow")
   stone2 = new Stone(100,550,55,55)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
  rubber3.display();
  rubber4.display();
    stone1.display()
 iron1.display();
 rubber5.display()
 stone2.display();
}