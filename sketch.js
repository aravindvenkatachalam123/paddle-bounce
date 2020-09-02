var ball,paddle,ball_img,paddle_img;
function preload() {
 ball_img=loadImage("ball.png");
  paddle_img=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   ball=createSprite(200,200,10,10);
  ball.addImage("ball img",ball_img);
  paddle=createSprite(380,200,10,10);
 paddle.addImage("paddle img",paddle_img);
  
  ball.velocityX=-9;

  

}

function draw() {
  background("orange");
 edges = createEdgeSprites();
  
ball.bounceOff(edges[0]);
ball.bounceOff(edges[2]);
ball.bounceOff(edges[3]);
ball.bounceOff(paddle);
// paddle.y = World.mouseY;
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  randomVelocity();
  
  if(keyDown(UP_ARROW))
  {
   paddle.velocityY=-5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.velocityY=5;
  }
  drawSprites();
  
}

function randomVelocity()
{
  if(ball.bounceOff(edges[0])||ball.bounceOff(edges[2])||ball.bounceOff(edges[3])){
    ball.velocityY=random(9,13);
     }
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}
