// reference: https://github.com/processing/p5.js/pull/2717

var myShader;

function preload() {
  myShader = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  myShader.setUniform('u_resolution', [width, height]);
  myShader.setUniform('u_mouse', [mouseX, mouseY]);
  myShader.setUniform('u_time', millis() / 1000.0);

  shader(myShader);
  translate(-width / 2,-height / 2, 0); // move the origin to the top left corner
  rect(0, 0, width, height);
}
