#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;

uniform float u_time;

//finally the 3
float hash(vec2 p)
{
  vec3 p3 = fract(vec3(p.xyx) * 0.13);
  p3 += dot(p3, p3.yzx + 333.333);
  return fract((p3.x + p3.y) * p3.z);
}

float hash(float p)
{
  p = fract(p * 0.11);
  p *= p + 7.5;
  p *= p + p; return
  fract(p);
}


float noise(vec3 x) {
    const vec3 step = vec3(110, 241, 171);

    vec3 i = floor(x);
    vec3 f = fract(x);

    // For performance, compute the base input to a 1D hash from the integer part of the argument and the
    // incremental change to the 1D based on the 3D -> 1D wrapping
    float n = dot(i, step);

    vec3 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix( hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x),
                   mix( hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
               mix(mix( hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x),
                   mix( hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
}


void main()
{
  vec2 coord = vTexCoord;

  coord = coord * 4.0;
  // u_time = u_time / (sin(coord.x) * 2.0);
  vec3 effect = vec3(noise(vec3(coord, (u_time / (abs(sin(u_time) * 2.0) + 2.0)))));
  effect.r = noise(vec3(coord, (u_time) + 0.1));

  effect.r = smoothstep(0.5, 0.9, effect.r);

  effect.b = smoothstep(0.7, 0.9, effect.b);

  effect.g = smoothstep(0.4, 1.0, effect.g);

  vec4 color = vec4(vec3(1.0 - effect), 1.0);

  gl_FragColor = color;
}
