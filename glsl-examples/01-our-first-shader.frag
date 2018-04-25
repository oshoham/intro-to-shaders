// this is a very minimal fragment shader

// since we're running in WebGL, we need to start our program by
// setting the level of precision that floating point numbers will use.
// lower precision means faster rendering at the expense of lower visual quality

#ifdef GL_ES
precision mediump float;
#endif

// every GLSL shader needs a main() function
void main() {
    // the last line of the main() function should set the special variable
    // gl_FragColor to a vec4 that contains red, green, blue, and alpha values,
    // each of which should be somewhere between 0.0 and 1.0

    // gl_FragColor is a built-in variable in GLSL, so we don't need to define it.
    // this color is called papayawhip
    gl_FragColor = vec4(1.0, 0.937, 0.835, 1.0);
}
