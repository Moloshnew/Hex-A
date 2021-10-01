attribute vec3 vertexPosition;
attribute vec3 vertexColor;

//uniform vec3 offset, rot;

varying vec3 fragColor;

void main(){
	fragColor = vertexColor;
	//vec3 pos = vertexPosition + offset;
	//vec3 rpos = vec3(
	//	
	//	pos.y * cos(rot.x) - pos.z * sin(rot.x)
	//	pos.y * sin(rot.x) + pos.z * cos(rot.x)
	//);
	
	//gl_Position = vec4(pos.x, pos.y * cos(beta) - pos.z * sin(beta), pos.y * sin(beta) + pos.z * cos(beta), 5);
	gl_Position = vec4(vertexPosition, 1);
}