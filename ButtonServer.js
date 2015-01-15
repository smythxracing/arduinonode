var five = require("johnny-five");
var onButton, offButton, led;

five.Board({ port : '\\\\.\\COM5' }).on("ready", function() {
	onButton = new five.Button(2);
	offButton = new five.Button(3);
	led = new five.Led(13);
	led.off();
	console.log("led set to off");
	
	onButton.on("down", function(value){
	console.log("The on button has been pressed");
	led.on();
	});
	
	offButton.on("hold",function(value){
	console.log("The off button has been pressed");
	led.off();
	});
	
});
