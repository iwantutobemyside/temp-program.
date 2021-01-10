function display(elementId, value)
{   
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
}

function toCelsius(Fahrenheit)
{
    let value = (Fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + " celsius"
}
function toFahrenheit(Celsius)
{
    let value = (Celsius * 9) / 5 + 32
    return value.toFixed(2) + " fahrenheit"
}

function toCelsiusProgram(value)
{
    alert(toCelsius(value))
}
function toFahrenheitProgram(value)
{
    alert(toFahrenheit(value))
}