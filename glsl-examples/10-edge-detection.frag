#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_tex0; // https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg
uniform vec2 u_resolution;

// Sobel edge detection algorithm: https://en.wikipedia.org/wiki/Sobel_operator

// a matrix is kind of like a 2D array
// a mat3 is a 9x9 matrix
const mat3 Gx = mat3(
    -1.0, -2.0, -1.0,
    0.0, 0.0, 0.0,
    1.0, 2.0, 1.0
);

const mat3 Gy = mat3(
    -1.0, 0.0, 1.0,
    -2.0, 0.0, 2.0,
    -1.0, 0.0, 1.0
);

float sobelEdgeDetection(in vec2 st, in sampler2D tex) {
    vec2 pixel = 1.0 / u_resolution;

    float valueGx = 0.0;
    float valueGy = 0.0;

    // look at the current pixel and its surrounding 8 pixels and
    // sum their intensities, multiplied by the horizontal and vertical Sobel kernels
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            vec4 texColor = texture2D(tex, st + pixel * vec2(i - 1, j - 1));
            float intensity = texColor.r;
            // we can access a matrix's fields with array syntax
            valueGx += Gx[i][j] * intensity;
            valueGy += Gy[i][j] * intensity;
        }
    }

    return length(vec2(valueGx, valueGy));
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    vec3 color = vec3(0.0);

    // get the color of the pixel at the current coordinates
    vec4 texColor = texture2D(u_tex0, st);
    color = texColor.rgb;

    // run the Sobel edge detection algorithm on the texture
    float edges = sobelEdgeDetection(st, u_tex0);
    // invert the detected edges
    color = 1.0 - vec3(edges);

    // combine the original pixel color with the inverted edges
    color = texColor.rgb * (1.0 - vec3(edges));

	gl_FragColor = vec4(color, 1.0);
}
