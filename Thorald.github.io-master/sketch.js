let img;

function preload() {
  img = loadImage('giraf.jpg');
}

let slider;
let button;

function setup() {
  createCanvas(1080,1920);

  //Title
  textSize(100);
  text('The Filter Filter', 540, 20);

  //slider density
  sliderBlur = createSlider(1, 100, 100);
  sliderBlur.position(1200,400);
  sliderBlur.style('width', '80px');

  //slider POSTERIZE
  sliderPOSTERIZE = createSlider(0, 100, 100);
  sliderPOSTERIZE.position(1200, 450);
  sliderPOSTERIZE.style('width', '80px');

  //slider Sofus
  sliderHueRotation = createSlider(2, 100, 100)
  sliderHueRotation.position(1200,500);
  sliderHueRotation.style('width', '80px');

  //button invert
  button = createButton('Invert Colours');
  button.position(350, 400);
  button.mousePressed(invertimage);

  //button erode
  button = createButton('Erode Image');
  button.position(350, 450);
  button.mousePressed(erode);

  //button shadow
  button = createButton('Blur');
  button.position(350, 500);
  button.mousePressed(dropShadow);

  //button GreyScale
  button = createButton('Greyscale');
  button.position(350, 550);
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

  image(img, 540, 200);
}
/*
Bruh
 hello?

*/




