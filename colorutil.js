// node1 - 1.2 luminosity require


// var r=process.argv[2];
// var g=process.argv[3];
// var b=process.argv[4];

var luminosity = function(r,g,b){
	return 0.2126*r + 0.7152*g + 0.0722*b;
};

var darken=function(r,g,b){
	var darkened=(Math.round(0.8*r)+' ,' +Math.round(0.8*g)+' ,' +Math.round(0.8*b));
	return darkened;
	//console.log(darkened);
};

module.exports={
	luminosity: luminosity,
	darken: darken

};

