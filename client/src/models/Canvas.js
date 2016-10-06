var Canvas = function() {
	console.log( "Hello I am a canvas" );
	this.display();
}

Canvas.prototype = {
	display: function() {

		var canvas = document.getElementById( 'canvas' );
		console.log( canvas );
		canvas.width = 800;
		canvas.height = 800;
	    var context = canvas.getContext( '2d' );
	    context.fillStyle = "blue";
		context.fillRect(10,10, 100, 200);
	},
}

module.exports = Canvas;