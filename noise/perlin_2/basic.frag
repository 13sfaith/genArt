#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vTexCoord;

uniform float u_time;

//2D random (gonna work for the 3)
float random(in vec2 coord)
{
  return fract(sin(dot(coord.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}

float noise (in vec2 coord)
{
  vec2 i = floor(coord);
  vec2 f = fract(coord);

  //determine 4 coorner colors
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  //determine gradient
  vec2 u = smoothstep(0.0, 1.0, f);

  //interpolate
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

void main()
{
  vec2 coord = vTexCoord;

  coord = coord * 4.0;
  coord.x += u_time / 10.0;
  float effect = noise(coord);

  effect = step(0.6, effect);

  vec4 color = vec4(vec3(effect), 1.0);

  gl_FragColor = color;
}
