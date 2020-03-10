let img;

function preload() {
  img = loadImage('giraf.jpg');
}

let slider;
let button;

function setup() {
  createCanvas(1280,700);

  //slider density
  sliderBlur = createSlider(1, 100, 100);
  sliderBlur.position(0,0);
  sliderBlur.style('width', '80px');

  //slider POSTERIZE
  sliderPOSTERIZE = createSlider(0, 100, 100);
  sliderPOSTERIZE.position(0, 30);
  sliderPOSTERIZE.style('width', '80px');

  //button invert
  button = createButton('click me');
  button.position(10, 200);
  button.mousePressed(invertimage);

  //button erode
  button = createButton('click me');
  button.position(10, 220);
  button.mousePressed(erode);

}

var i = 0.01

function invertimage() {
  img.filter(INVERT)
}

function erode() {
  img.filter(ERODE)
}


function draw() {

  //pixel density
  let val = sliderBlur.value()/100;
  pixelDensity(val)

  //pixel
  let val2 = sliderPOSTERIZE.value();
  img.filter(POSTERIZE,val2);

  image(img, 300, 50);
}
