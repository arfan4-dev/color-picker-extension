const btn = document.querySelector('#btn');
const colorGrid = document.querySelector('#colorGrid');
const colorValue = document.querySelector('#colorValue');



let eyeDropper = new EyeDropper();

btn.addEventListener('click', e => {
    // Enter eyedropper mode
    eyeDropper.open()
    .then(colorSelectionResult => {
        colorValue.textContent = colorSelectionResult.sRGBHex;
        colorGrid.style.backgroundColor = colorSelectionResult.sRGBHex;

         navigator.clipboard.writeText(colorSelectionResult.sRGBHex)
    })
    .catch(error => {
        // handle the user choosing to exit eyedropper mode without a selection
    });
});


