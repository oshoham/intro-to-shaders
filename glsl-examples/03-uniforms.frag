#ifdef GL_ES
precision mediump float;
#endif

// uniforms are variables that contain data passed from the CPU to the GPU
// uniforms have the same value for every pixel (hence the name "uniform")

// this editor gives us three uniforms by default

uniform vec2 u_resolution; // the width and height of the canvas
uniform vec2 u_mouse; // the un-normalized XY coordinates of the mouse
uniform float u_time; // how long the shader has been running (in seconds)

void main() {
    float speed = 2.0;
    // GLSL includes a lot of useful mathematical functions like sin and abs
    // sine computes the sine of an angle
    // abs computes the absolute value of a number
    vec3 color = vec3(0.0, 0.0, abs(sin(u_time * speed)));
    gl_FragColor = vec4(color,1.0);
}