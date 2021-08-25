var ship,ship_man;
var ground, ground_boi;
var edge;

function preload(){
ship_man = loadAnimation ("ship-4.png", "ship-3.png", "ship-2.png", "ship-1.png")
ground_boi = loadAnimation("sea.png")
}

function setup(){
createCanvas(1550,750);

  
ground = createSprite (200,100,100,70);
ground.addAnimation("ground", ground_boi);

ground.x = 50
ground.scale = 0.8
ground.y = 100
ship = createSprite(100,100,100,100);
ship.addAnimation("running", ship_man);
edge = createEdgeSprites();
ship.scale =0.65
ship.x = 500
ship.y = 400
ground.x = ground.width/2
ground.velocityX = -4

}



function draw(){
background("blue");
if (keyIsDown(UP_ARROW)) {
ship.velocityY =-10; 
}

if (ground.x < 0) {
    ground.x = ground.width / 2;
    }




//ship.collide(ground);
drawSprites();  
}