// taille du canvas variable 
let canvasX = 600;
let canvasY = 300;

////////////////////////////////////////////

//positionX horizontale et positionY verticale varibales
let positionX;
let positionY;

let lastMouseY;
let lastMouseX;

let mouseWasPressed = false;
// "movingToRight" est un booléen qui indique si l'objet se déplace vers la droite
let movingToRight = true;

//////////////////////////////////////////////////

  let img 
  let img1 
  let font
  
  
//////////////////////////////////////////////////
function setup() {
  createCanvas(canvasX, canvasY);
  
  positionX = 0;
  positionY = height / 2;
  
/////////////////////////////////////////////////

  
  // charger une image dans le sketch (sous-dossier "TRUC")
  img = loadImage('TRUC/oskour.jpg');
  img1 = loadImage('TRUC/yeah.jpg');
  // charger la typo
  font = loadFont('TRUC/BOP.ttf')
  
}

/////////////////////////////////////////////////////
function draw() {
   // Efface l'écran et redessine un fond rouge à chaque frame
  background("red");
  
//////////////////////////////////////////////////////
  //noFill();
  //strokeWeight(2);
  //stroke ("green");
  //circle( positionX, positionY, 30);

  
  //noFill();
  //strokeWeight(2);
  //stroke ("blue");
  //circle(random (positionX,615), positionY, 30);
///////////////////////////////////////////////////////
    
    
      // Si on click la souris 
 if (mouseIsPressed) {
   lastMouseX= mouseX
   lastMouseY = mouseY
   
   console.log(lastMouseX, lastMouseY);
   if (mouseX < width /2){

   // Alors dessine l'image grâce à la fonction suivante :
   // image(quel image, coordX=SOURIS, coord Y=SOURIS, largeur, hauteur)
   image(img, mouseX, mouseY, 90, 160);
     
     fill("pink");
      stroke ("blue");
      strokeWeight(2);
  
 // taille de typo 
 textSize(22);
 // dessine la typo selon grâce à la fonction : 
 // text("texte à dessiner", coordX, coordY)
 text("va la bas ->", random (mouseX, mouseX+50), positionY);
   
   console.log ("avance")  
  }  
   
   else if (mouseX >= width /2) {
    
    image(img1 ,mouseX, mouseY, 90, 160);
     
     fill("rgb(108,214,89)");
      stroke ("#CE32BA");
      strokeWeight(5);
  
 // taille de typo 
 textSize(50);
 // dessine la typo selon grâce à la fonction : 
 // text("texte à dessiner", coordX, coordY)
 text("BO$$", random (mouseX, mouseX+10), random (mouseY+100, mouseY +300));
     
     noFill; 
    noStroke;
  
 // taille de typo 
 textSize(100);
 // dessine la typo selon grâce à la fonction : 
 // text("texte à dessiner", coordX, coordY)
 text("👑", random (mouseX+35, mouseX+65), random (mouseY+30, mouseY+20));
     
   
     console.log ("winneuse")
    mouseWasPressed = true;
    }  
 }
  else if (mouseWasPressed) {
    mouseWasPressed = false;
    //if (lastMouseX< width /2) { 
    image(img1, lastMouseX, lastMouseY, 90, 160);
  //}
           }
 //img de départ
  else {
    image(img, 100, 100, 90, 160);
}

 
//////////////////////////////////////////////////////
  
  
  // Si la position X est supérieure ou égale à 0
  // ET que l'objet se déplace vers la droite
  //if (positionX >= 0 && movingToRight) {
    // Augmente la valeur de positionX pour déplacer l'objet vers la droite
    //positionX++;
    //console.log("on avance"); // Affiche un message dans la console
  
//////////////////////////////////////////////////////////
    
    //if (positionX>=0 )
    
    //if (mouseIsPressed) {
      //if ()
    // fill("pink");
      //stroke ("blue");
      //strokeWeight(2);
  
 // taille de typo 
 //textSize(22);
 // dessine la typo selon grâce à la fonction : 
 // text("texte à dessiner", coordX, coordY)
 //text("va la bas ->", random (mouseX, mouseX+50), positionY);
  }
//}
//}   
  

  