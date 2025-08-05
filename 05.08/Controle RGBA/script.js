const colorPicker = document.getElementById("colorPicker");
const colorDisplay = document.getElementById("colorDisplay");
const colorCode = document.getElementById("colorCode");
const tela = document.getElementById("tela");
const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");
const alphaRange = document.getElementById("alphaRange");
const redValue = document.getElementById("redValue");
const greenValue = document.getElementById("greenValue");
const blueValue = document.getElementById("blueValue");
const alphaValue = document.getElementById("alphaValue");

let red = 255;
let green = 255;
let blue = 255;
let alpha = 100;

function updateColor() {
    const hexColor = rgbToHex(red, green, blue);
    const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${alpha / 100})`;

    colorDisplay.style.backgroundColor = rgbaColor;
    colorCode.textContent = hexColor.toUpperCase();
    tela.style.backgroundColor = rgbaColor;
    tela.style.opacity = alpha / 100;
    colorPicker.value = hexColor;
}

function rgbToHex(r, g, b) {
    const toHex = (value) => {
        const hex = value.toString(16).padStart(2, '0');
        return hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

colorPicker.addEventListener("input", (e) => {
    const hex = e.target.value;
    const rgb = hexToRgb(hex);
    red = rgb.r;
    green = rgb.g;
    blue = rgb.b;

    redRange.value = red;
    greenRange.value = green;
    blueRange.value = blue;

    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
    updateColor();
});

function setupSlider(slider, valueElement, colorComponent) {
    slider.addEventListener("input", (e) => {
        const value = e.target.value;
        valueElement.textContent = value;

        if (colorComponent === 'red') red = parseInt(value);
        else if (colorComponent === 'green') green = parseInt(value);
        else if (colorComponent === 'blue') blue = parseInt(value);
        else if (colorComponent === 'alpha') alpha = parseInt(value);

        colorPicker.value = rgbToHex(red, green, blue);
        updateColor();
    });
}

setupSlider(redRange, redValue, 'red');
setupSlider(greenRange, greenValue, 'green');
setupSlider(blueRange, blueValue, 'blue');
setupSlider(alphaRange, alphaValue, 'alpha');

colorCode.addEventListener("click", () => {
    navigator.clipboard.writeText(colorCode.textContent)
     .then(() => {
        const originalText = colorCode.textContent;
        colorCode.textContent = "Copiado!";
        setTimeout(() => {
            colorCode.textContent = originalText;
        }, 2000);
     })
     .catch(err => {
        console.error('Erro ao copiar: ', err);
     });
});
updateColor();
