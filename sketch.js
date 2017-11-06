var back;
var backcol;

var mySound;
var analizzatore;
var volume;

function preload(){
  mySound=loadSound('media/WeAreOne.mp3');
  back=loadImage('media/sfondo.jpg');
  backcol=loadImage('media/sfondo.jpg');
}

function setup() {
  angleMode(DEGREES);
  colorMode(HSB);
  createCanvas(windowWidth,windowHeight);
    analizzatore= new p5.Amplitude();
    analizzatore.setInput(mySound);
}



function draw(){
 
  
    //background('black');
  
  image(back,0,0, width, height);
  back.filter("gray");
  
  volume=analizzatore.getLevel();
  //text('il volume è ' + volume, 20,20);
  
    if(mouseY<=height/2){
      mySound.pause();
      back.filter('gray')
    }
    
    else{
      if (mySound.isPlaying() == false)
      mySound.play();
      image(backcol,0,0, width,height);
    }
    
    
    var diametro=0;
   // var diameter = (x + y)/10;
    diametro=volume*50;
    
    push();
    translate(width/2,height/2);
   rotate(frameCount);
   
   for (var x=-width; x < width; x+=80) {
      for (var y=-height; y < height; y+=80){
        noStroke();
          var myHue = x / width * 255;      
          var mySat = y / height * 255;
            
            fill(myHue, mySat, 255);
        //diametro=volume*30/(x);
        ellipse(x,y,diametro);
      }
   }
   
   pop();
  
  
}


function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}