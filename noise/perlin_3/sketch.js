let baseShader;

function preload() {
  baseShader = loadShader('basic.vert', 'basic.frag');
}

function setup() {
  createCanvas(720, 720, WEBGL);
  noStroke();
  background(30);

}


function draw() {
  shader(baseShader);

  baseShader.setUniform('u_time', frameCount * 0.01);

  rect(0, 0, width, height);
}
