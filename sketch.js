let img;

function preload() {
  img = loadImage('giraf.jpg');
}

let slider;
let button;

function setup() {
  createCanvas(1080,1920);

  //slider density
  sliderBlur = createSlider(1, 100, 100);
  sliderBlur.position(700,300);
  sliderBlur.style('width', '80px');

  //slider POSTERIZE
  sliderPOSTERIZE = createSlider(0, 100, 100);
  sliderPOSTERIZE.position(700, 400);
  sliderPOSTERIZE.style('width', '80px');

  //slider Sofus
  sliderHueRotation = createSlider(2, 100, 100)
  sliderHueRotation.position(700,500);
  sliderHueRotation.style('width', '80px');

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

  image(img, 200, 200);
  textSize(32);
  textStyle(BOLDITALIC);
  text('Filter-Filtret™', 340, 175);
}

/*
Bruh
 hello?
test
what's good?

*/




