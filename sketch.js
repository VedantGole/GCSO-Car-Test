//Declaring Global Variables
var car, weight;
var wall, speed;

var deformation;

//Additional Speedometer
var Speed = speed;

function setup() {
createCanvas(1600, 400);

//Assigning random values to the speed and weight and the car
speed = random(55, 90);
weight = random(400, 1500);

//putting the deformation Formula into an variable
deformation = (0.5 * weight * speed * speed)/22500

//creating the wall and the car
car = createSprite(50, 200, 100, 50);
wall = createSprite(1200, 200, 60, height/2);

//giving the random speed to the car
car.velocityX = speed;
  
}
function draw() {
  background(0);
  
  //Adding code for the car's results : green, yellow, red for pass, moderate and fail respectively.
  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    if(deformation < 100){
      car.shapeColor = color(0, 255, 0);
    }
    if(deformation > 100 && deformation < 180){
      car.shapeColor= color(230, 230, 0)    
    }
    if(deformation > 180){
      car.shapeColor = color(255, 0, 0);
    }
  }

  text("Speed of the car = " + Math.round(speed) + " KM/H", 650, 50);

  drawSprites();
}