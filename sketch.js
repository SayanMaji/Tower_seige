
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(100,650,3000,30);
	ground2 = new Ground(885,400,340,5);
    
    //1st row
	box1 = new Box(380,182,50,70);
	box2 = new Box(405,182,50,70);
    box3 = new Box(430,182,50,70);
    box4 = new Box(455,182,50,70);
    box5 = new Box(480,182,50,70);
    box6 = new Box(505,182,50,70);

    //2nd row
    box7 = new Box(395,147,50,70);
    box8 = new Box(420,147,50,70);
    box9 = new Box(445,147,50,70);
    box10 = new Box(470,147,50,70);
    box11 = new Box(495,147,50,70);

    //3rd row
    box12 = new Box(405,112,50,70);
    box13 = new Box(430,112,50,70);
    box14 = new Box(455,112,50,70);
    box15 = new Box(480,112,50,70);

    //4th row
    box16 = new Box(420,77,50,70);
    box17 = new Box(445,77,50,70);
    box18 = new Box(470,77,50,70);

    //5th row
    box19 = new Box(435,42,50,70);
    box20 = new Box(460,42,50,70);

    box21 = new Box(450,9.5,40,60);
    
    striker = new Polygon(150,450,50);
    shooter = new Launcher(striker.body,{x:150,y:420});
    


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background("pink");
  ground1.display();
  ground2.display();

  //displaying 1st row
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  //displaying 2nd row
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  //displaying 3rd row
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  //displaying 4th row
  box16.display();
  box17.display();
  box18.display();

  //displaying 5th row
  box19.display()
  box20.display();

  box21.display();
  striker.display();
  shooter.display();
 
}
function mouseDragged(){
    Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}



