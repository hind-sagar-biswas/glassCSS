//VARIABLES


//SELECTORS
const blurInput = document.getElementById("blur");
const opacityInput = document.getElementById("opacity");
const outputDisplay = document.getElementById("result");
const demoDisplay = [
document.getElementById("showDemo"),
document.getElementById("up"),
document.getElementById("down")
];
const rgbInput = [
document.getElementById("red"),
document.getElementById("green"),
document.getElementById("blue")
];
const rgbLabel = [
document.getElementById("redLabel"),
document.getElementById("greenLabel"),
document.getElementById("blueLabel")
];
const blurLabel = document.getElementById("blurLabel");
const opacityLabel = document.getElementById("opacityLabel");



//EVENTLISTENER
blurInput.addEventListener("input", function () {
	updateCode()});

opacityInput.addEventListener("input", function () {
	updateCode()});
for(i of rgbInput){
	i.addEventListener("input", function () {
	updateCode()});
}


//OBJECTS
var glassProperty = {
	red : 225,
	blue : 225,
	green : 225,
	alpha : 3.5,
	blur : 4,
	haveBorder : true,
	getCssCode : function() {
		var code = `background: rgba( ${this.red}, ${this.green}, ${this.blue}, ${this.alpha} );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.30 );
backdrop-filter: blur( ${this.blur}px );
-webkit-backdrop-filter: blur( ${this.blur}px );
border-radius: 10px;
`;
	if(this.haveBorder) {
		code += `border: 1px solid rgba( 255, 255, 255, 0.18 );`;}
		return code;
	},
}

//FUNCTIONS
function updateCode() {
	glassProperty.blur = blurInput.value / 10;
	glassProperty.alpha = opacityInput.value / 100;
	
	glassProperty.red = rgbInput[0].value;
	glassProperty.green = rgbInput[1].value;
glassProperty.blue = rgbInput[2].value;
	
	outputDisplay.value = glassProperty.getCssCode();
	for(var i of demoDisplay) {
		i.style = glassProperty.getCssCode();
		}
	
	blurLabel.innerHTML = `Blur: ${glassProperty.blur}`;
	opacityLabel.innerHTML = `Opacity: ${glassProperty.alpha}`;
	
	rgbLabel[0].innerHTML = `red: ${glassProperty.red}`;
	rgbLabel[1].innerHTML = `green: ${glassProperty.green}`;
	rgbLabel[2].innerHTML = `blue: ${glassProperty.blue}`;
}
	
function toggleBorder() {
	if(glassProperty.haveBorder) {
		glassProperty.haveBorder = false;
	}else {
		glassProperty.haveBorder = true;
	}
	updateCode();
}

/* Function to copy the CSS code which has been generated */
function copyText(textId) {
  var copyText = document.getElementById(textId);

  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  document.execCommand("copy");
  
}


//MAIN FLOW
updateCode();
