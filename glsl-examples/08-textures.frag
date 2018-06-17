#ifdef GL_ES
precision mediump float;
#endif

// textures allow us to process images and video in our shaders

// sampler2D is the data type for 2D textures
// in this editor, we can load images into uniform textures named u_tex#
// by putting a URL in a comment next to the uniform declaration
uniform sampler2D u_tex0; // https://pbs.twimg.com/profile_images/948761950363664385/Fpr2Oz35_400x400.jpg
uniform vec2 u_resolution;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    vec3 color = vec3(0.0);

    // texture2D() returns a vec4 containing the RGBA color
    // of the pixel in the specified texture at the given coordinates
    vec4 texColor = texture2D(u_tex0, st);

    // to render a texture, we just need to set each pixel to the color
	// of the corresponding pixel from the texture
    color = texColor.rgb;

	gl_FragColor = vec4(color, 1.0);
}
