// vertex data
attribute vec3 aPosition;
attribute vec2 aTexCoord;

//varying  texture coords
varying vec2  vTexCoord;

void main()
{
  //copy texture coords
  vTexCoord = aTexCoord;

  //copy the position data
  vec4 positionVec4 = vec4(aPosition, 1.0);
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  //send the vertex information to the frag Shader
  gl_Position = positionVec4;
}
