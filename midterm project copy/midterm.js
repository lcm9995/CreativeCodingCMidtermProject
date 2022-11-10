

var snowX = []; // empty list of x values for snow circles
var snowY = []; // empty list of y values for snow circles

let snow11; // first left side snow object
let snow12; // first left-middle snow object
let snow13; // first middle right snow 
let snow14; // first right side snow 
let snow21; // second left side snow 
let snow22; // second left-middle snow 
let snow23; // second right middle snow 
let snow24; // second right side snow 
let snow31; // third left side snow 
let snow32; // third left middle snow 
let snow33; // third right middle snow 
let snow34; // third right snow 


var A = 0; // stores the change in y of the snow from initial position
var B = 0;

var inc = 0; 
var snowTime = false; // used to signal the snowing() function to start
var static = false; 
var k=0; // acts like framecount, increases every time draw loop
var backFade=0; // used to change the background and change the sketch over time


function setup() {
  createCanvas(windowWidth, windowHeight);
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
}

function draw() {
  k+=1; // like framecount
  if(k%2==0){ 
    backFade+=1; // when k is even backfade goes up by 1, every other draw loop
    background(0+backFade); // background color fades from black to white
  }
  //if(snowTime==true){
    //background(0);
 // }

  if(backFade<=130){ 
    greenFairies(50+backFade, 100+backFade); // passes the range of opacity for the fairies, which increases as it goes
    if(backFade%3==0){ // red fairies appear less frequently
      redFairies(200-2*backFade, 250-1.5*backFade); 
    }
  }
  if((backFade>30) && (backFade<160)){ 
    yellowCircle(250-1.5*backFade, 250-1.5*backFade, 0, 50+backFade*.4, backFade-20); // passes rgb values which decrease to black, size and opacity
  }
 if((backFade>=160)&&(backFade<=1000)){
    yellowCircle(0, 0, 0, 200-.5*backFade, 250); //black circle decreasing in size
    }
  if(backFade>=130){
    wave(); //sound wave appears
  }
  /*if(backFade>=150){
    static=true; 
  }*/
  if(backFade>=150){
    //static=false;
    snowTime=true; // 
  }
  if(snowTime==true){
    snowing(1, 1.2, .8, 1.1); // passes different values for speed for the different objects/ sections of snow to fall at
    yellowCircle(240, 240, 240, backFade*.8*1.5, 150); // circle reappears and grows into white light
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


  function snowing(s1, s2, s3, s4){ // function displays and moves objects of the snow class
  //background(0); // reset background to black every loop so the circles dont become lines when they move
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
  snow21.move(0.9*s1); // speed differs between the different objects within the same x range so it looks like it changes a little over time
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
    this.i1=i1; // i value for the snowX and snowY lists because same two lists are used for all objects so their indexes cant overlap
    this.i2=i2; // end i value
    this.w1 = w1; // leftmost x cordinate of that snow section
    this.w2 = w2; // rightmost x cord of that snow section
    this.h1 = h1; // topmost y pos of that snow section
    this.h2 = h2; // bottom y pos of that snow section
    this.A = A; // starts at 0 and becomes larger as each object's speed is incremented
    
    for(var i = this.i1; i<=this.i2; i++){ // for each i value of that object, the corresponding index is set to a random value within the snow range of that object
    snowX[i] = random(this.w1, this.w2); 
    snowY[i] = random(this.h1, this.h2);
    }
  }

  display(){
  fill(255);
  stroke(255);
  for (var i = this.i1; i<=this.i2; i++){ // i represents the list index and x/y values of the snow,
    if(snowY[i]+this.A>= height-100){ //if y value plus the amount the snow is moving down by (A) is below the imaginary ground line
      circle(snowX[i], (height-100), 0.5); // circle will stop 100 pixels above bottom of window to mimic the ground.
    } else {
         circle(snowX[i], snowY[i]+this.A, 0.5); // otherwise the circle will move down by A
          }
    /*if((snowY[i]+A>=height-100)&&(snowY[i]<=height-100)){
      circle(snowX[i], height-100, width/400);
    }*/
  }
}
  move(speed){
    this.speed=speed; 
    this.A=this.A+this.speed; // A holds the total distance the snow has fallen since zero, while speed represents the amount it falls each time
  }
}

function wave(){
  var angle = 0; // of wave as it is being drawn
  var angleVel = .3; // more sharp waves angle increments by more at a time without changing amplitude
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
      var y = map(tan(angle), -1, 1, windowHeight-50, windowHeight-150); // map resizes the waves height from -1 to 1 to take up the bottom portion of the window
      vertex(x, y); // vertex of wave changes as the for loop runs
      angle+=angleVel; // 
    }
   if((inc%2)!=0){ // if inc is uneven (every other run througgh of for loop), sin wave is drawn
      var c = map(sin(angle), -1, 1, windowHeight-150, windowHeight-50);
      vertex(x, c); // c used in place of y because using a different kind of wave so need different variable
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

function road(){ // did not end up using this function but made a road with street lights
  background(180, 150, 189);
  //fill(200);
  //rect(0, 0, windowWidth, windowHeight);
  stroke(50);
  fill(50);
  rect(0, windowHeight/2, windowWidth, windowHeight);
   background(0);
 // fill(200, 50);
  //rect(0, 0, windowWidth, windowHeight);
  stroke(50);
  fill(50);
  rect(0, windowHeight/2, windowWidth, windowHeight);
  fill(90, 40, 10);
  quad(-50, windowHeight, windowWidth/4, windowHeight/2, windowWidth-windowWidth/4, windowHeight/2, windowWidth+50, windowHeight);
  fill(150, 150, 0);
  quad(windowWidth/2-10, windowHeight, windowWidth/2+10, windowHeight, windowWidth/2+7, windowHeight-30, windowWidth/2-7, windowHeight-30);
  quad(windowWidth/2-6.5, windowHeight-45, windowWidth/2+6.5, windowHeight-45, windowWidth/2+4.5, windowHeight-70, windowWidth/2-4.5, windowHeight-70);
  quad(windowWidth/2-4, windowHeight-80, windowWidth/2+4, windowHeight-80, windowWidth/2+3, windowHeight-100, windowWidth/2-3, windowHeight-100);
  //line(100, windowHeight, 130, windowHeight-400);
  fill(250, 180, 50, 250);
  circle(windowWidth-windowWidth/5, 50, 46);
  fill(240, 180, 50, 80);
  //stroke(240, 180, 50, 100);
  noStroke();
  triangle(windowWidth-windowWidth/5, 50, windowWidth-windowWidth/4, windowHeight-windowHeight/4, windowWidth/2-180, windowHeight/2+150);
  ellipse(windowWidth/2-20, windowHeight-windowHeight/4, windowWidth/2+30, windowHeight/8);
  fill(240, 180, 50, 50);
  quad(windowWidth/2, windowHeight, windowWidth, windowHeight, windowWidth-windowWidth/4, windowHeight/2, windowWidth/2, windowHeight/2);
}

class Trees{ // did not end up using this class 
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


