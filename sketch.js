var backg;
var road;
var red ,reds
var score;
var count;
var destroy
function preload() {
    backg = loadImage("bck.jpg");
    reds = loadImage("reds.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
   backg = createSprite(600,200,1200,399);
   backg.shapeColor = "white";
   road = createSprite(600,399,1200,20)
red = createSprite(50,370,40,40);
red.addImage(reds);
red.scale=0.15
score = 0;
count=0;
destroy = new Group;
}
function draw(){
    background(0);
    squaresp();
  
    if(frameCount % 5 === 0){
        count = count + 1
      }
    if(keyDown("space") && red.collide(road)){
        red.velocityY = -12.7;
        
    }
   
    red.velocityY = red.velocityY + 0.8;
    red.collide(road);
    score = count
    if(red.isTouching(destroy)){
        for(var i=0;i<destroy.length;i=i+1){
            if(red.isTouching(destroy[i])){
                destroy[i].destroy()
            }
        }
      
    }
    
drawSprites();
fill ("black")
text("Score:" + score, 500,100);
   
}

function squaresp(){
   if(frameCount % 150 === 0){
    var square = createSprite(1200,380,40,40)
    square.velocityX= - 3
    square.shapeColor= "black";
    destroy.add(square);
   }
}

