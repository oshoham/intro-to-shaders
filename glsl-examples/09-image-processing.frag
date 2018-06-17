#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_tex0; // https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    vec3 color = vec3(0.0);

    vec4 texColor = texture2D(u_tex0, st);

    // convert to grayscale
    float luma = 0.2126 * texColor.r + 0.7152 * texColor.g + 0.0722 * texColor.b;
    color = vec3(luma);

    // step() will return 0.0 if luma is less than 0.5, and 1.0 if it's greater than 0.5
    // this is referred to as "binarizing" or "thresholding" an image
    color = vec3(step(0.5, luma));

	gl_FragColor = vec4(color, 1.0);
}
