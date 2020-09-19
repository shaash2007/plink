const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var divisionHeight=300;
var divisions =[]; 
var plinko =[]; 
var particle=[];

function setup() {
  createCanvas(700,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,790,480,20)
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}
for(var x =50; x<width; x= x + 50){
 plinko.push(new Plinko(x, 75))
}
for(var x =75; x<width-10; x= x + 50){
  plinko.push(new Plinko(x, 175))
}
for(var x =50; x<width; x= x + 50){
  plinko.push(new Plinko(x, 275))
}
}
function draw() {
  background(0,0,0); 
  Engine.update(engine); 
  ground.display();
  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-40,width/2+40),10))
  }
  for (var y=0;y<particle.length; y++){
    particle[y].display();
    console.log("plinko")
  }
  for (var k=0;k<divisions.length; k++){
    divisions[k].display();
  }
  for (var x=0;x<plinko.length; x++){
    plinko[x].display();
  }
 
  drawSprites();
}