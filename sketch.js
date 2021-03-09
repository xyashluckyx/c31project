const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rand;
var maxDrops=50;

function preload() {
    thunder1=loadImage("proc41images/images/thunderbolt/1.png");

    thunder2=loadImage("proc41images/images/thunderbolt/2.png");
}

function setup(){
    createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

   
    umbrella=new Umbrella(170,470);

    for(var i=0; i<maxDrops; i++){
        drops=(new Rainfall(random(0,400),random(0,30)));
    }
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
    if(frameCount%80===0){
        var rand=Math.round(random(1,4));
        thunderCreateFrame=frameCount;
        var thunder=createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1:thunder.addImage(thunder1);
                 break;
            case 2:thunder.addImage(thunder2);
                 break;
            default: break;
        }
        thunder.scale=random(0.3,0.6);
        
    }
    drops.display();
    umbrella.display();
   
    drawSprites();
}

  

