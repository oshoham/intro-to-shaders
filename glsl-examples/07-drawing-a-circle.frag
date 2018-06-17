#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;

// to draw a circle in a fragment shader, we need to ask,
// "is the current pixel inside or outside of the circle?"

// we can do this by getting the distance of the current pixel from the center of
// our circle

// the simplest way to do this is to use the built-in "distance" function

// this technique is known as a "distance field"

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    float dist = 0.0;

    float radius = 0.25;
    vec2 center = vec2(0.5);

    // we could also make the circle follow the mouse
    // center = u_mouse / u_resolution;

    dist = distance(st, center);

    // now we can turn every pixel within our radius white,
    // and every pixel that falls outside black
    // dist = step(dist, radius);

    // or we could use smoothstep to give our circle smoother edges
    // dist = smoothstep(dist, dist + 0.003, radius);

    // how could we turn this code into a re-usable function for drawing a circle?

    vec3 color = vec3(dist);

    gl_FragColor = vec4(color,1.0);
}
