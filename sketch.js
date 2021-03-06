let img;

function preload() {
  img = loadImage('giraf.jpg');
}

let slider;
let button;

function setup() {
  createCanvas(1080,850);

  //slider density
  sliderBlur = createSlider(1, 100, 100);
  sliderBlur.position(700,300);
  sliderBlur.style('width', '80px');

  //slider POSTERIZE
  sliderPOSTERIZE = createSlider(10, 100, 100);
  sliderPOSTERIZE.position(700, 400);
  sliderPOSTERIZE.style('width', '80px');

  //slider Threshold
  sliderThreshold = createSlider(0, 100, 0)
  sliderThreshold.position(700,500);
  sliderThreshold.style('width', '80px');

  //button invert
  button = createButton('Invert Colours');
  button.position(90, 400);
  button.mousePressed(invertimage);

  //button erode
  button = createButton('Erode Image');
  button.position(90, 450);
  button.mousePressed(erode);

  //button shadow
  button = createButton('Blur');
  button.position(90, 500);
  button.mousePressed(dropShadow);

  //button GreyScale
  button = createButton('Greyscale');
  button.position(90, 550);
  button.mousePressed(greyScale);
  
  
  //button dilate
  button = createButton('Dilate Image');
  button.position(90, 350);
  button.mousePressed(dilate);

   //button saveImg
   button = createButton('Save');
   button.position(90, 700);
   button.mousePressed(SAVE);

    //button thresh
    button = createButton('Threshold');
    button.position(90, 600);
    button.mousePressed(Thresh);

  
  /*
  button = createButton('restart');
  button.position(500, 550);
  button.mousePressed(resetSketch);
  */
}

function SAVE() {
  saveCanvas('myCanvas', 'giraf.jpg');
}
function dilate() {
  img.filter(DILATE)
}

function Thresh() {
  img.filter(THRESHOLD,0.5);
}


function invertimage() {
  img.filter(INVERT)
}

function erode() {
  img.filter(ERODE)
}

function dropShadow () {
  img.filter(BLUR,1)
}

function greyScale () {
  img.filter(GRAY)
}

function draw() {

  //pixel density
  let val = sliderBlur.value()/100;
  pixelDensity(val)

  //pixel posturize
  let val2 = sliderPOSTERIZE.value();
  img.filter(POSTERIZE,val2);
  
  //pixel threshold
  
  image(img, 200, 200);

  textSize(32);
  textStyle(BOLDITALIC);
  text('Filter-Filtret™', 340, 175);

  textSize(15);
  text('resolution', 700, 285);

  textSize(15);
  text('posturize', 700, 385);
  
  textSize(15);
  text('lil somn somn', 700, 485);
}

/*
Bruh
 hello?
test
what's good?
alkdsjfalk
*/
