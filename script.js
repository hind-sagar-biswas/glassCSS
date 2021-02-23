//VARIABLES
var blur = 4;
var opacity = 0.35;
var haveBorder = true;
var cssCode;

//SELECTORS
const blurInput = document.getElementById("blur");
const opacityInput = document.getElementById("opacity");
const outputDisplay = document.getElementById("result");
const demoDisplay = document.getElementById("showDemo");
const blurLabel = document.getElementById("blurLabel");
const opacityLabel = document.getElementById("opacityLabel");


//EVENTLISTENER
blurInput.addEventListener("input", function() {
	blur = blurInput.value;
	updateCode();
});

opacityInput.addEventListener("input", function() {
	opacity = opacityInput.value / 100;
	updateCode();
});


//FUNCTIONS
/* Function to toggle border */
function toggleBorder() {
	if(haveBorder) {
		haveBorder = false;
	}else {
		haveBorder = true;
	}
	updateCode();
}

/* Function to update the whole HTML when any changes are made */
function updateCode() {
	cssCode = `background: rgba( 255, 255, 255, ${opacity} );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.30 );
backdrop-filter: blur( ${blur}px );
-webkit-backdrop-filter: blur( ${blur}px );
border-radius: 10px;
`;
if(haveBorder) {
	cssCode += `border: 1px solid rgba( 255, 255, 255, 0.18 );`;
}
	outputDisplay.value = cssCode;
	demoDisplay.style = cssCode;
	blurLabel.innerHTML = `Blur: ${blur}`;
	opacityLabel.innerHTML = `Opacity: ${opacity}`;
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
if(screen.width < 800)	{
	outputDisplay.rows = 10;
}
