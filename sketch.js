const Engine=Matter.Engine
const World=Matter.World
const Body=Matter.Body
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var bgImg
var gbox,sBox,mBox,log,bBox,ball,chain,ground;
function preload(){
bgImg=loadImage("bg1.jpg")
}

function setup(){
  createCanvas(2000,900);
  engine=Engine.create();
  world=engine.world;
  gbox=new Box1(1280,750,150,150);
  gbox1=new Box1(1415,750,150,150);
  gbox2=new Box1(1550,750,150,150)
  gbox3=new Box1(1685,750,150,150);
  gbox4=new Box1(1820,750,150,150);
  sBox=new Box(1340,650,150,150,PI/7);
  sBox1=new Box(1390,650,150,150,PI/7)
  sBox2=new Box(1600,650,150,150,PI/7);
  sBox3=new Box(1780,650,150,150,PI/7);
  mBox=new medBox(1390,550,150,150,PI/7);
  mBox2=new medBox(1710,550,150,150,PI/7);
  mBox3=new medBox(1500,550,150,150,PI/7);
 // log=new Log(1370,530,500,15,PI/7);
  bBox=new medBox(1595,450,150,150,PI/7);
  bBox2=new medBox(1750,450,150,150,PI/7);
  bBox3=new medBox(1760,400,150,150,PI/9)

  ball=new Ball(200,580,PI/7);
 
  chain=new SlingShot(ball.body,{x:200,y:580})

  ground=new Ground(635,900,1300,16);
  



}
function draw(){
  background(bgImg)
  Engine.update(engine);
  sBox.display();
  gbox.display();
  gbox1.display();
  gbox2.display();
  gbox3.display();
  gbox4.display();
  sBox1.display();
  sBox2.display();
  sBox3.display();
  mBox.display();
  mBox2.display();
  //log.display();
  mBox3.display();
  bBox.display();
  bBox2.display();
  bBox3.display();
  ball.display();
  chain.display();
  ground.display();

  textSize(30);
  textFont("Arial Black");
  fill("red");
  text("PRESS SPACE TO GET A ONE MORE CHANCE",700,100);
  console.log(sBox.body.position)
}

function mouseReleased(){
  chain.fly();
}



function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(ball.body,{x:200,y:580})
    chain.attach(ball.body)
  }
}

