#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

// gl_FragCoord is another built-in variable in GLSL, kind of like gl_FragColor
// gl_FragCoord contains the un-normalized XY coordinates of the current pixel
// gl_FragCoord is a varying, a variable whose value is different for every pixel
// (as opposed to a uniform)

void main() {
    // by dividing gl_FragCoord.xy by u_resolution, we normalize the pixel coordinates
    // to the range 0.0 - 1.0
    vec2 st = gl_FragCoord.xy / u_resolution;
    // we then multiply st.x by the aspect ratio to accomodate non-square canvases
    st.x *= u_resolution.x / u_resolution.y;

    vec3 color = vec3(st.x, st.y, 0.5);
    
    // you'll often see the variable names "st" or "uv" used to refer to normalized
    // 2D coordinates. "st" and "uv" are used pretty much interchangeably as far as
    // I can tell. see this StackOverflow answer for a possible origin for this
    // naming convention:
    // https://stackoverflow.com/questions/10568390/difference-between-u-v-and-s-t-texture-coordinates#answer-13219949

    gl_FragColor = vec4(color,1.0);
}