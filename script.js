//VARIABLES
var blur = 12.5;
var opacity = 0.35;
var haveBorder = true;
var cssCode;

//SELECTORS
const blurInput = document.getElementById("blur");
const opacityInput = document.getElementById("opacity");
const outputDisplay = document.getElementById("result");
const demoDisplay = [
document.getElementById("showDemo"),
document.getElementById("up"),
document.getElementById("down")
];
const blurLabel = document.getElementById("blurLabel");
const opacityLabel = document.getElementById("opacityLabel");


//EVENTLISTENER
blurInput.addEventListener("input", function() {
	blur = blurInput.value / 10;
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
	for(var i of demoDisplay) {
		i.style = cssCode;
	}
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

/* color picker */
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'monolith', // or 'classic', or 'nano'
    useAsButton: true,
    default: `#ffffff`,
    defaultRepresentation: 'HEX',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: false,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: true,
            save: true
        }
    }
});

//MAIN FLOW
updateCode();
if(screen.width < 800)	{
	outputDisplay.rows = 10;
}
