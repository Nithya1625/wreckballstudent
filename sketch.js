const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;









function preload() {
    
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1500,790,3000,20);
   

    



    
}

function draw(){
    
        background("white");
    
       
        
    
    Engine.update(engine);
    
    ground.display();
    

}

