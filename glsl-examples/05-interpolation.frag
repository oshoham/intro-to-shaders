#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    st.x *= u_resolution.x / u_resolution.y;

    // here, we're using the normalized x coordinate of the current pixel
    // as a grayscale brightness value
    
    float gradient = 0.0;
    gradient = st.x;
    
    // we can apply various mathematical operations to the x coordinate to shape
    // the horizontal gradient
    
    // step will return 0.0 if st.x is less 0.5, and 1.0 if it's greater than 0.5
    // gradient = step(0.5, st.x);
    
    // smoothstep will smoothly interpolate st.x between 0.1 and 0.9
    // gradient = smoothstep(0.1, 0.9, st.x);
    
    // we can also combine multiple shaping functions
    // gradient = smoothstep(0.2, 0.5, st.x) - smoothstep(0.5, 0.8, st.x);
    
    // here are some other operations we could do:
    // gradient = pow(st.x, 5.0);
    // gradient = min(st.x, 0.5);
    // gradient = max(st.x, 0.5);
    
    vec3 color = vec3(gradient);

    gl_FragColor = vec4(color,1.0);
}