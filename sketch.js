var canvas, backgroundImage;
var runner1,runner2;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var cars,car1,car2;

function preload(){
  track = loadImage("track.jpg");
  runner1 = loadImage("running 1.png");
  runner2 = loadImage("running 2.png");
}

function setup(){
  canvas = createCanvas(displayWidth-30,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

}
