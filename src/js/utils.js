
function getVariableTypeFromShorthand(shorthand){
	var type;
	switch ( shorthand ) {
		case "i": type = "int"; break;
		case "f": type = "float"; break;
		case "t": type = "sampler2D"; break;
		case "v2": type = "vec2"; break;
		case "v3": type = "vec3"; break;
		case "v4": type = "vec4"; break;
		// TODO add 'matrix' and 'array support'
	}
	return type;
}