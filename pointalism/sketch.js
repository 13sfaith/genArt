let img;
let imgShader;
let cam;

function preload() {
  img = loadImage('assets/sa.jpg');
  imgShader = loadShader('effect.vert', 'effect.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight);

  cam.hide();
}


function draw() {
  shader(imgShader);

  imgShader.setUniform('tex0', cam);

  imgShader.setUniform('resolution', [width, height]);

  imgShader.setUniform('u_time', frameCount * 0.01);

  rect(0, 0, width, height);
}
