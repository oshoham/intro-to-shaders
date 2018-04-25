// this is a macro. all macros begin with a hashtag (#).
// macros are evaluated before the rest of the program is compiled
#ifdef GL_ES
precision mediump float;
#endif

// this is a comment
/* this is also a comment */

// GLSL is a statically typed language.
// this means that variables need to be declared with a type
// that describes what they are.

// here are some of the most commonly used data types in GLSL:
int i = 1; // integer
float f = 1.0; // floating point decimal number
bool b = true; // boolean
vec2 v2 = vec2(0.0, 1.0); // 2 dimensional vector of floats
vec3 v3 = vec3(0.0, 0.5, 1.0); // 3 dimensional vector of floats
vec4 v4 = vec4(0.0, 0.25, 0.75, 1.0); // 4 dimensional vector of floats

// a vector is a container for grouping values together
// e.g. a vec2 could be an XY coordinate
// or a vec4 could be an RGBA color

// functions need to be declared with the type of value that they'll return
vec4 peachpuff() {
    return vec4(1.0, 0.855, 0.725, 1.0);
}

// the special return type "void" means that this function doesn't return anything
void main() {
    gl_FragColor = peachpuff();
}
