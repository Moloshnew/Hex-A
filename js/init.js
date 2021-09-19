function init_canvas() {
	canvas = document.getElementById('IntroCanvas');
	ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	intro();
}

function init_webGL() {
	canvas.remove();
	canvas = document.getElementById('GameCanvas');
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	var vertexShaderText = document.getElementById('vertex-shader').text,
		fragmentShaderText = document.getElementById('fragment-shader').text,
		gl = canvas.getContext('webgl');
		
	if (!gl) {
		alert('Your browser does not support WebGL');
		return;
	}
	
	gl.viewport(0, 0, window.innerWidth, window.innerHeight);

	var vertexShader = gl.createShader(gl.VERTEX_SHADER);
		fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
	
	gl.shaderSource(vertexShader, vertexShaderText);
	gl.shaderSource(fragmentShader, fragmentShaderText);
	
	gl.compileShader(vertexShader);
	gl.compileShader(fragmentShader);

	if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
		console.error(gl.getShaderInfoLog(vertexShader));
		alert('Error compiling vertex shader!');
		return;
	}

	if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
		console.error(gl.getShaderInfoLog(fragmentShader));
		alert('Error compiling fragment shader!');
		return;
	}
	
	var program = gl.createProgram();
	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);
	
	gl.validateProgram(program);
	
	if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
		alert('Error validating program');
		return;
	}
		
}