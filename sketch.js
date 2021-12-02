var JOGAR = 1;
var ENCERRAR = 0;
var estados = JOGAR;
var imagemDaTorre, torre;
var imagemDaPorta,  grupoDePortas;
var imagemDeEscalador, escalador, grupoDeEscaladores;
var fantasma, imagemDoFantasma;
var grupoDeBlocoInvisivel, blocoInvisivel;
var estadoJogo = "JOGAR"
var gerarObstaculos;
var parede1, parede2
var reiniciar


function preload(){
  imagemDaTorre = loadImage("tower.png");
  imagemDaPorta = loadImage("door.png");
  imagemDeEscalador = loadImage("climber.png");
  imagemDoFantasma = loadImage("ghost-standing.png");
  somAssustador = loadSound("spooky.wav");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  createEdgeSprites();
  //parede1 = createSprite(500,400,500,10);
  
  torre = createSprite(700,300);
  torre.addImage("tower",imagemDaTorre);
  torre.velocityY = 1;
  
  fantasma = createSprite(400,500);
  fantasma.addImage("ghost",imagemDoFantasma);
   
  grupoDeBlocoInvisivel = new Group();


}


function draw(){
  background(200);
  
  
  if(torre.y > 400){
      torre.y = 300  
  }  
  parede1 = createSprite(200,500,10,500);
  
  parede2 = createSprite(1200,500,10,100); 
  
fantasma.setCollider("rectangle",0,0,200,250,0);
 fantasma.debug=true;
 
 parede1.debug=false;


 if(keyDown("Left")){
  fantasma.x = fantasma.x-3
}

if(keyDown("Right")){
  fantasma.x = fantasma.x+5
}
  //fantasma.x = mouseX
  fantasma.scale = 0.4;
 
  torre.scale = 2.0;
  fantasma.bounceOff(parede1);
  fantasma.bounceOff(parede2); 
  
  parede1.visible = false;
  parede2.visible = false;
  
  gerarObstaculos();
    
  if(grupoDeBlocoInvisivel.isTouching(fantasma)){
   fantasma.visible = false;
   grupoDeBlocoInvisivel.destroyEach();
   
   alert("pressione R para reiniciar");
  
  }

   if(keyDown("R")){
    fantasma.x = 700
    fantasma.visible = true;


  }
   
  drawSprites();
}

function gerarObstaculos(){
if(frameCount % 60 === 0){
   var porta1 = createSprite(Math.round(random(250,1100)),0);

    
   porta1.addImage("climber.png", imagemDeEscalador);
   porta1.velocityY = 2;

   porta1.scale = 1.0;
   porta1.lifetime = 400;
   porta1.debug = true;

   grupoDeBlocoInvisivel.add(porta1);
  } 
}
