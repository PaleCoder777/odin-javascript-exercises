const convertToCelsius = function(tempInFahrenheit) {
// Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9
let tempInCelsius = (tempInFahrenheit - 32) * (5/9);
let tempInCelsiusRounded = Math.round(tempInCelsius * 10) / 10; 
return tempInCelsiusRounded;
};

const convertToFahrenheit = function(tempInCelsius) {
// Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32
let tempInFahrenheit = (tempInCelsius * (9/5)) + 32;
let tempInFahrenheitRounded = Math.round(tempInFahrenheit * 10) / 10;
return tempInFahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
