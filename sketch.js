//Create variables here
var dog, dogImage, happyDogImage, database, foodS, foodStock
function preload()
{
dogImage = loadImage("images/dogImg.png");
happyDogImage = loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.15
  
database = firebase.database();

foodStock = database.ref('Food');
foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImage);
  }
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x===0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}


