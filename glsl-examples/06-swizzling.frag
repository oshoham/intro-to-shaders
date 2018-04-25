#ifdef GL_ES
precision mediump float;
#endif

// we can "swizzle" the component values of a vector to access individual values,
// create smaller vectors, or rearrange values in any order that we want

// the components of a vector can be accessed with the letters "xyzw" (position),
// "rgba" (color), or "stpq" (texture coordinates)

// it's up to you which one to use, they all do the same thing

void main() {
    vec3 blue = vec3(0.0, 0.0, 1.0);
    
    // now we've swapped the red value for the blue value
    vec3 red = blue.brg;
    
    // we can also use the same component multiple times
    vec3 yellow = red.rrg;
    
    // since colors and position coordinates are both normalized between 0.0 and 1.0,
    // we can start to think of vectors as being interchangeable between these contexts
    vec2 topRight = yellow.xy;
    
    vec3 color = yellow;

    gl_FragColor = vec4(color,1.0);
}