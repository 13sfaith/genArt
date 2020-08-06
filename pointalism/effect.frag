precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D tex0;
uniform vec2 resolution;
uniform float u_time;

void main()
{

  vec2 uv = vTexCoord;
  //uv comes backwards and upside down, fun!
  uv = 1.0 - uv;

  //get size of a single pixel
  vec2 pixelSize = vec2(1.0) / resolution;

  float spacing = (300.0 * abs((sin(u_time / 4.0)))) + 10.0;

  float xEffect = step(0.01, mod(uv.x, pixelSize.x * 25.0));
  float yEffect = step(0.01, mod(uv.y, pixelSize.y * 25.0));

  uv = floor(uv * spacing) / spacing;

  vec4 tex = texture2D(tex0, uv);

  // tex += xEffect;
  // tex += yEffect;

  // establish offset
  // vec2 offset = pixelSize * (20.0 * sin(u_time * uv.y));

  // float sineWave = sin(uv.y * u_time) * 1.0;
  // vec2 distort = vec2(offset.x, 0.0);
  //
  // //rgb channels
  // vec4 rtex = texture2D(tex0, uv - offset);
  // vec4 gtex = texture2D(tex0, uv + offset);
  // vec4 btex = texture2D(tex0, uv);
  //
  // vec4 distortTex = texture2D(tex0, uv +  distort);
  // //
  // vec4 color = vec4(rtex.r, gtex.g, btex.b, 1.0);
  vec4 color = vec4(vec3(tex), 1.0);

  gl_FragColor = color;
}
