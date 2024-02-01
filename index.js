// create a variable that takes the value of the input
let valueInput = document.getElementById("input-value");


// a function that converts on click
function convertOnClick() {
    // when clicked, call the conversion functions below.
    lengthConverter();
    volumeConverter();
    massConverter();
}

// function for length output
function lengthConverter() {
    let lengthText = document.getElementById("length-conversion");
    lengthText.textContent = `${valueInput.value} meters = ${(valueInput.value * 3.28084).toFixed(3)} feet | ${valueInput.value} feet = ${(valueInput.value * 0.3048).toFixed(3)} meters`
    //convert unit by length
    //output text to html
}

// function for volume output
function volumeConverter() {
    let volumeText = document.getElementById("volume-conversion");
    volumeText.textContent = `${valueInput.value} liters = ${(valueInput.value * 0.264172).toFixed(3)} gallons | ${valueInput.value} gallons = ${(valueInput.value * 3.78541).toFixed(3)} liters`
    //convert unit by volume
    //output text to html
}

// function for mass output
function massConverter() {
    let massText = document.getElementById("mass-conversion");
    massText.textContent = `${valueInput.value} kilos = ${(valueInput.value * 2.20462).toFixed(3)} pounds | ${valueInput.value} pounds = ${(valueInput.value * 0.453592).toFixed(3)} kilos`
    //convert unit by mass
    //output text to html
}