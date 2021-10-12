
var bgImg,bg;
var block,blockImg,blockGroup;
var arrow,arrowImage;
var score
var bow,bowImage;


function preload(){
bgImg=loadImage("images/img1.png");
blockImg=loadImage("images/img2.png");
bowImage = loadImage("images/img7.png");
arrowImage = loadImage("images/img5(1).png");
}

function setup(){
    
  createCanvas(1200,600);

    bow = createSprite(200,300,20,20)
    bow.addImage(bowImage);
    bow.scale=0.15
   
   blockGroup=new Group();
   score =0;
}
function draw() {
  background(bgImg);

  
  if (keyDown("space")) {
    createArrow();
  }

  if (World.frameCount % 100 == 0){
    objects();
    }

    if(arrow.isTouching(blockGroup)){
      score=score+1;
    }

 drawSprites();
 text("Score:  "+score,100,100);
}



function createArrow() {
  arrow= createSprite(200, 300, 60, 10);
  arrow.addImage(arrowImage);
  arrow.velocityX = 4;
  arrow.lifetime = 140;
  arrow.scale = 0.20;
  return arrow;
   
}


  function objects(){
      block=createSprite(800,20,25,25);
      block.addImage(blockImg);
      block.scale=0.15
      block.velocityY=3;
      blockGroup.add(block);
    
    
  }

