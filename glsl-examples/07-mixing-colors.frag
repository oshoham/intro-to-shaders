#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 white = vec3(1.0);
vec3 skyBlue = vec3(0.529, 0.808, 0.922);
vec3 orange = vec3(0.975,0.382,0.0);
vec3 red = vec3(0.955,0.082,0.229);
vec3 pink = vec3(0.954,0.761,0.975);
vec3 purple = vec3(0.628,0.095,0.990);
vec3 deepBlue = vec3(0.042,0.110,0.975);
vec3 aqua = vec3(0.371,0.825,0.801);
vec3 slate = vec3(0.517,0.650,0.625);
vec3 olive = vec3(0.333,0.420,0.184);

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution;
    st.x *= u_resolution.x / u_resolution.y;

    vec3 color = vec3(0.);
    
    // the mix() function allows us to blend two colors together based on a float
    // value between 0.0 and 1.0
    color = mix(red, purple, st.x);
    // color = mix(deepBlue, orange, st.y);
    
    // we could also mix based on time to gradually shift between colors
    // color = mix(pink, olive, abs(sin(u_time)));
    
    // another thing to keep in mind is that the vectors that we mix() together don't have to be colors

    gl_FragColor = vec4(color,1.0);
}