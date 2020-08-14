precision mediump float;

varying vec2 vTexCoord;

void main()
{
  vec2 coord = vTexCoord;

  vec4 color = vec4(vec3(vTexCoord.x), 1.0);

  gl_FragColor = color;
}
