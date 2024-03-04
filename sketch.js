var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  //Cargando imágenes del jugador y fondo

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //añadiendo background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  
  
//creando el sprite jugador
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);

  //agregar colissionador y debug true



}

function draw() {
  background(0); 

  //mover al jugador arriba y abajo y hacer el juego compatible con pantallas móviles usando "touches"



  //cambiar la imagen del jugador cuando se presiona la tecla espacio
  //volver al jugador a su posicion original cuando se suelta la tecla espacio



  //mostrar sprites
  

}
