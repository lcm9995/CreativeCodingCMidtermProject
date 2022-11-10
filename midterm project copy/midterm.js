

var snowX = []; // empty list of x values for snow circles
var snowY = []; // empty list of y values for snow circles

let snow11;
let snow12;
let snow13;
let snow14;
let snow21;
let snow22;
let snow23;
let snow24;
let snow31;
let snow32;
let snow33;
let snow34;

//let branch1;

var A=0;
var B = 0;
//var snowNames = [];
//let snow1;
//var amplitude = 100;
//  var period = 120;
  //var x = amplitude * cos(TWO_PI * frameCount / period); // Nature of Code Chapter 3
//var angleVel2 = .1;

var inc = 0;
var snowTime = false;
var static = false;
var k=0;
var backFade=0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(220);
  background(0);
  snow11 = new Snow(0, 100, 0, windowWidth/4, 0, windowHeight);
  snow12= new Snow(101, 200, windowWidth/8, windowWidth/2, 0, windowHeight);
  snow13= new Snow(201, 300, windowWidth/4, windowWidth*0.875, 0, windowHeight);
  snow14= new Snow(301, 400, windowWidth*0.5, windowWidth, 0, windowHeight);
  snow21 = new Snow(401, 500, 0, windowWidth/4, -windowHeight, 0);
  snow22 = new Snow(501, 600, windowWidth/4, windowWidth/2, -windowHeight, 0);
  snow23 = new Snow(601, 700, windowWidth/2, windowWidth*0.75, -windowHeight, 0);
  snow24 = new Snow(701, 800, windowWidth*0.75, windowWidth, -windowHeight, 0);
  snow31 = new Snow(801, 900, 0, windowWidth/4, -windowHeight*2, -windowHeight);
  snow32 = new Snow(901, 1000, windowWidth/4, windowWidth/2, windowHeight*-2, -windowHeight);
  snow33 = new Snow(1001, 1100, windowWidth/2, windowWidth*0.75, windowHeight*-2, -windowHeight);
  snow34 = new Snow(1101, 1200, windowWidth*0.75, windowWidth, windowHeight*-2, -windowHeight);
  /*for(var i = 0; i<=2000; i++){
    snowX[i] = random(0, windowWidth);
    snowY[i] = random(-2000, windowHeight-100);*/
    //snowNames[i] = 'snow'+str(i);
    //console.log(snowNames[i]);
    //snow1= new Snow(snowX[i], snowY[i]);

 // }
 // branch1 = new Trees(10, 800, 400, 2);
}

function draw() {
  //background(0);
  //branch1.display();
  //wave();
  k+=1;
  if(k%2==0){
    backFade+=1;
    background(0+backFade);
  }
  //if(snowTime==true){
    //background(0);
 // }

  if(backFade<=130){
    greenFairies(50+backFade, 100+backFade);
    if(backFade%3==0){
      redFairies(200-2*backFade, 250-1.5*backFade);
    }
  }
  if((backFade>30) && (backFade<160)){
    yellowCircle(250-1.5*backFade, 250-1.5*backFade, 0, 50+backFade*.4, backFade-20);
  }
 if((backFade>=160)&&(backFade<=1000)){
    yellowCircle(0, 0, 0, 200-.5*backFade, 250);
    }
  if(backFade>=130){
    wave();
  }
  if(backFade>=150){
    static=true; 
  }
  if(backFade>=250){
    static=false;
    snowTime=true;
  }
  if(snowTime==true){
    snowing(1, 1.2, .8, 1.1);
    yellowCircle(230, 200, 230, backFade*.8*1.5, 150);
  }
 }

/*
  if(backFade>=100){
    wave();
  }
  if(backFade>=160){
    snow();
  }

   if((backFade%2==0)&&(backFade<=130)){
      greenFairies(50, 100);
    }
  if((backFade>30)&&(i<=900)){
    yellowCircle(90+backFade, 220, 0, backFade/2, 150/backFade);
  }
  if((backFade>50) && (backFade<250)){
    yellowCircle(250-1*backFade, 250-1*backFade, 0, backFade*1.1, backFade-20);
  }
  if((inc>=width*1000)&&(inc<width)){
    yellowCircle(255, 255, 255, 250-1*backFade, 200);
  }
  if((inc>=width)){
    yellowCircle(0, 0, 0, 1, 0);
  }
  }
  /*if((backFade>=240)&&(backFade<=1)){
    yellowCircle(0, 0, 240-backFade/2, 250);
  }*/
  //if(backFade>=200){
    //snow();
  //}
  //if(backFade>130)

  //greenFairies();
  // greenFairies();
  //if(backFade<=70){
    //redFairies();
  //}

  //if(A<=2000){
    //snow();
 // }
  //if(A>1700){
   // sound();
  //}
  
  //console.log(A);


  function snowing(s1, s2, s3, s4){
  background(0);
  snow11.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow21.display();
  snow22.display();
  snow23.display();
  snow24.display();
  snow31.display();
  snow32.display();
  snow33.display();
  snow34.display();
  /*snow41.display();
  snow42.display();
  snow43.display();
  snow44.display();*/
  snow11.move(s1);
  snow21.move(0.9*s1);
  snow31.move(s1*0.95);
 // snow41.move(s1*0.8);
  snow12.move(s2);
  snow22.move(s2*0.9);
  snow32.move(s2*.75);
 // snow42.move(s2*.6);
  snow13.move(s3);
  snow23.move(s3*0.9);
  snow33.move(s3*0.85);
 // snow43.move(s3*0.74);
  snow14.move(s4);
  snow24.move(s4*0.88);
  snow34.move(s4*0.7);
 // snow44.move(s4*0.7);
//  snow14.move(s4);
}

class Snow{
  constructor(i1, i2, w1, w2, h1, h2){
    this.i1=i1;
    this.i2=i2;
    this.w1 = w1;
    this.w2 = w2;
    this.h1 = h1;
    this.h2 = h2;
    this.A = A;
    
    for(var i = this.i1; i<=this.i2; i++){
    snowX[i] = random(this.w1, this.w2);
    snowY[i] = random(this.h1, this.h2);
    }
  }
  display(){
  fill(255);
  stroke(255);
  for (var i = this.i1; i<=this.i2; i++){ // i represents the list index and x/y values of the snow,
    if(snowY[i]+this.A>= height-100){ //if y value plus the amount the snow is moving down by (A) is below the imaginary ground line
      circle(snowX[i], (height-100), 0.5); // circle will be drawn with 
    } else {
         circle(snowX[i], snowY[i]+this.A, 0.5);
          }
    /*if((snowY[i]+A>=height-100)&&(snowY[i]<=height-100)){
      circle(snowX[i], height-100, width/400);
    }*/
  }
}
  move(speed){
    this.speed=speed;
    this.A=this.A+this.speed;
  }
}


/*function snow(){
  /*if(inc>=(width*1000+width)){ //determines if the wave is off the screen so the background doesnt cover it up before it is done
    background(0); 
  }
  //background(0);
  //road();
  fill(255); 
  stroke(255);
  for (var i = 0; i<=2000; i++){ // i represents the list index and x/y values of the snow,
    if(snowY[i]+A>= height-100){ //if y value plus the amount the snow is moving down by (A) is below the imaginary ground line
      circle(snowX[i], (height-100), 0.5); // circle will be drawn with 
    } else {
         circle(snowX[i], snowY[i]+A, 0.5);
          }
    /*if((snowY[i]+A>=height-100)&&(snowY[i]<=height-100)){
      circle(snowX[i], height-100, width/400);
    }
  }
  A=A+.7+random(.0,.3);
  /* fill(100);
  quad(windowWidth/7, windowHeight, windowWidth*.4, windowHeight/2, windowWidth*.6, windowHeight/2, windowWidth-windowWidth/7, windowHeight);
  fill(150, 150, 0);
  quad(windowWidth/2-10, windowHeight, windowWidth/2+10, windowHeight, windowWidth/2+7, windowHeight-30, windowWidth/2-7, windowHeight-30);
  quad(windowWidth/2-6.5, windowHeight-45, windowWidth/2+6.5, windowHeight-45, windowWidth/2+4.5, windowHeight-70, windowWidth/2-4.5, windowHeight-70);
  quad(windowWidth/2-4, windowHeight-80, windowWidth/2+4, windowHeight-80, windowWidth/2+3, windowHeight-100, windowWidth/2-3, windowHeight-100);*/


function wave(){
  var angle = 0; //
  var angleVel = .3;
 // 

 if(backFade<=150){
  stroke(0);
 } else{
  background(0);
   stroke(255);
  }
  strokeWeight(2);
  noFill();

  
  beginShape(); 
  for(var x = (-windowWidth*1000)+inc; x<=windowWidth; x+=70){ // creates wave that begins off left of window and ends at the edge of the window, the change in x dictates the wavelength and inc moves the wave across the window
    /*if(x>(-width*1000)){
      for(var i = 0; i<=255; i+= 1){
        stroke(i);
      }*/
    //}
    if((inc%2)==0){ // if inc is even the wave for that vertex will use tan
      var y = map(tan(angle), -1, 1, windowHeight-50, windowHeight-150); // map relocates the wave to 
      vertex(x, y);
      angle+=angleVel; //
    }
   if((inc%2)!=0){ // if not
      var c = map(sin(angle), -1, 1, windowHeight-150, windowHeight-50);
      vertex(x, c);
      angle+=angleVel;
    }

  inc = inc + 1; // inc increases each loop so the wave continues to move
}
  if(inc>=(windowWidth*1000)){ 
      snowTime=true; // tells the snow function to start as the wave ends
    }
  endShape();
  /*if(backFade<=windowWidth/2){
  yellowCircle(200, 200, 0, backFade*1.5, 90);
}
  if(backFade>=windowWidth/2){
    yellowCircle(150, 150, 0, windowWidth/2-backFade*.8, 80);
  }*/
  
}

function greenFairies(o1, o2){ 
  stroke(0, random(100, 240), 0, random(o1, o2)); //random opacity between the two parameters and different values of green
  fill(0, random(100, 240), 0, random(o1, o2));
  circle(random(0, width), random(0, height), random(windowWidth/120, windowWidth/80)); //various size circles across screen
}

function redFairies(o1, o2){
  stroke(random(150, 230), 0, 0, random(o1, o2)); //different opacity and different values of red
  fill(random(150, 230), 0, 0, random(o1, o2));
  ellipse(random(0, width), random(0, height), random(windowWidth/120, windowWidth/80), random(windowWidth/120, windowWidth/80)); //varying size and location
  ellipse(random(0, width), random(0, height), random(windowWidth/120, windowWidth/80), random(windowHeight/100, windowHeight/90));
  
}

function yellowCircle(r, g, b, s, o){ // r and g control red and green values, s gives size of circle, o gives opacity
  stroke(r, g, b, o);
  fill(r, g, b, o);
  circle(width/2, height/2, s);
}

function road(){
  background(180, 150, 189);
  //fill(200);
  //rect(0, 0, windowWidth, windowHeight);
  stroke(50);
  fill(50);
  rect(0, windowHeight/2, windowWidth, windowHeight);
}

class Trees{
  constructor(w1, x1, y1, scale1){
    this.weight = w1;
    this.x = x1;
    this.y= y1;
    this.scaley=scale1;
  }
  display(){
    
    stroke(250);
    strokeWeight(this.weight);
    strokeCap(ROUND);
    strokeJoin(BEVEL);
    line(this.x, this.y, this.x-20*this.scaley, this.y-10*this.scaley);
    line(this.x-20*this.scaley, this.y-10*this.scaley, this.x-40*this.scaley, this.y-10*this.scaley);
    this.x=this.x-40*this.scaley;
    this.y=this.y-10*this.scaley;
    this.weight=this.weight-1;
    this.scaley=this.scaley;
  }
}

/*
var snowX = []; // empty list of x values for snow circles
var snowY = []; // empty list of y values for snow circles

var A=0;
var B = 0;
//var snowNames = [];
//let snow1;
//var amplitude = 100;
//  var period = 120;
  //var x = amplitude * cos(TWO_PI * frameCount / period); // Nature of Code Chapter 3
//var angleVel2 = .1;

var inc = 0;
var snowTime = false;

var k=0;
var backFade=0;

 var angle = 0; //
var angleVel = .3;


function setup() {
  createCanvas(windowWidth, windowHeight);
   background(220);
  //background(0);
  for(var i = 0; i<=2000; i++){
    snowX[i] = random(0, windowWidth);
    snowY[i] = random(-2000, windowHeight-100);
    //snowNames[i] = 'snow'+str(i);
    //console.log(snowNames[i]);
    //snow1= new Snow(snowX[i], snowY[i]);
  }

}

function draw() {
  //background(0);

  //wave();
  k+=1;
  if(i%5==0){
    backFade+=1;
    background(0+backFade);
  }
  //if(snowTime==true){
    //background(0);
 // }

  if(backFade<=130){
    greenFairies(50+backFade, 100+backFade);
    if(backFade%3==0){
      redFairies(200-2*backFade, 250-1.5*backFade);
    }
  }
  if((backFade>30) && (backFade<160)){
    yellowCircle(250-1.5*backFade, 250-1.5*backFade, 0, 50+backFade*.4, backFade-20);
  }
 if((backFade>=160)&&(backFade<=1000)){
    yellowCircle(0, 0, 0, 200-.5*backFade, 250);
    }
  if(backFade>=130){
    wave();
  }
  //if(k>=200){
    //snowTime=True;
  //}
}

/*
  if(backFade>=100){
    wave();
  }
  if(backFade>=160){
    snow();
  }

   if((backFade%2==0)&&(backFade<=130)){
      greenFairies(50, 100);
    }
  if((backFade>30)&&(i<=900)){
    yellowCircle(90+backFade, 220, 0, backFade/2, 150/backFade);
  }
  if((backFade>50) && (backFade<250)){
    yellowCircle(250-1*backFade, 250-1*backFade, 0, backFade*1.1, backFade-20);
  }
  if((inc>=width*1000)&&(inc<width)){
    yellowCircle(255, 255, 255, 250-1*backFade, 200);
  }
  if((inc>=width)){
    yellowCircle(0, 0, 0, 1, 0);
  }
  }
  /*if((backFade>=240)&&(backFade<=1)){
    yellowCircle(0, 0, 240-backFade/2, 250);
  }*/
  //if(backFade>=200){
    //snow();
  //}
  //if(backFade>130)

  //greenFairies();
  // greenFairies();
  //if(backFade<=70){
    //redFairies();
  //}

  //if(A<=2000){
    //snow();
 // }
  //if(A>1700){
   // sound();
  //}
  
  //console.log(A);


/*function snow(){
  /*if(inc>=(width*1000+width)){ //determines if the wave is off the screen so the background doesnt cover it up before it is done
    background(0); 
  }*/
 /* backGround(0);
  fill(255); 
  stroke(255);
  for (var i = 0; i<=2000; i++){ // i represents the list index and x/y values of the snow,
    if(snowY[i]+A >= height-100){ //if y value plus the amount the snow is moving down by (A) is below the imaginary ground line
      circle(snowX[i], snowY[i]+ ((height-100)-snowY[i]), .5); // circle will be drawn with 
    }
    else{//if(snowY[i]+A < height-100){
     circle(snowX[i], snowY[i]+A, .5);
    }
    /*if((snowY[i]+A>=height-100)&&(snowY[i]<=height-100)){
      circle(snowX[i], height-100, width/400);
    }*/
  /*   A=A+.7;
  }
}

function wave(){
 // 

 // if(backFade<160){
  //stroke(0);
 // }
 // else{
    //background(0);
   // stroke(255);
  //}
  stroke(0);
  strokeWeight(2);
  noFill();

  
  beginShape(); 
  for(var x = (-windowWidth*1000)+inc; x<=windowWidth; x+=70){ // creates wave that begins off left of window and ends at the edge of the window, the change in x dictates the wavelength and inc moves the wave across the window
    /*if(x>(-width*1000)){
      for(var i = 0; i<=255; i+= 1){
        stroke(i);
      }  if((inc%2)==0){ // if inc is even the wave for that vertex will use tan
      var y = map(tan(angle), -1, 1, height-50, height-150); // map relocates the wave to 
      vertex(x, y);
      angle+=angleVel; //
    }
   if((inc%2)!=0){ // if not
      var c = map(sin(angle), -1, 1, height-150, height-50);
      vertex(x, c);
      angle+=angleVel;
    }

  inc = inc + 1; // inc increases each loop so the wave continues to move
}
  if(inc>=(width*1000)){ 
      snowTime=true; // tells the snow function to start as the wave ends
    }
  endShape();
  /*if(backFade<=windowWidth/2){
  yellowCircle(200, 200, 0, backFade*1.5, 90);
}
  if(backFade>=windowWidth/2){
    yellowCircle(150, 150, 0, windowWidth/2-backFade*.8, 80);
  }
}

function greenFairies(o1, o2){ 
  stroke(0, random(100, 240), 0, random(o1, o2)); //random opacity between the two parameters and different values of green
  fill(0, random(100, 240), 0, random(o1, o2));
  circle(random(0, width), random(0, height), random(windowWidth/120, windowWidth/80)); //various size circles across screen
}

function redFairies(o1, o2){
  stroke(random(150, 230), 0, 0, random(o1, o2)); //different opacity and different values of red
  fill(random(150, 230), 0, 0, random(o1, o2));
  ellipse(random(0, width), random(0, height), random(windowWidth/120, windowWidth/80), random(windowWidth/120, windowWidth/80)); //varying size and location
  ellipse(random(0, width), random(0, height), random(windowWidth/120, windowWidth/80), random(windowHeight/100, windowHeight/90));
  
}

function yellowCircle(r, g, b, s, o){ // r and g control red and green values, s gives size of circle, o gives opacity
  stroke(r, g, b, o);
  fill(r, g, b, o);
  circle(width/2, height/2, s);
}
*/
