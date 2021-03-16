const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;


//character scale ~= 1.4 or 1.5

var s1,t1,t2,t3,t4,w1;
var canvas;
var engine, world;
var man;
var thunderCreatedFrame = 0;
var thunder;
var rand_var;


var maxDrops = 100;
   var dropArray = [];


function preload(){
    s1 = loadSound("SThund.mp3");
    t1 = loadImage("1.png");
    t2 = loadImage("2.png");
    t3 = loadImage("3.png");
    t4 = loadImage("4.png");
    w1 = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");
    
}

function setup(){
    
   canvas = createCanvas(1323,1575);
   engine = Engine.create();
   world = engine.world;

   if(frameCount % 150 === 0) {
    for(var i = 0; i < maxDrops; i++) {
        dropArray.push(new Drop(random(0,1323),random(0,1575)));
       
       
        }

        
}


  
  
      

man = new Umbrella(661.5,1364);



    
}

function draw(){
    background(0/*,32*/);
    Engine.update(engine);
//console.log(mouseY)
    


rand_var = Math.round(random(1,4));
if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder = createSprite(random(10,1290), random(10,30), 10, 10);
   // s1.play();
    switch(rand_var){
        case 1: thunder.addImage(t1);
        break;
        case 2: thunder.addImage(t2);
        break; 
        case 3: thunder.addImage(t3);
        break;
        case 4: thunder.addImage(t4);
        break;
        default: break;
    }
    thunder.scale = random(1, 3)
}

if(thunderCreatedFrame + 10 ===frameCount && thunder){
    thunder.destroy();
}
    
   
        for(var i = 0; i < maxDrops; i++) {
            dropArray[i].update();
            dropArray[i].display();
           
           
            }
    
        man.display();

    drawSprites();

   
    }
    






