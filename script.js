function convertTemperature() {
    const input = parseFloat(document.getElementById('input').value);
    const scale = document.getElementById('scale').value;
    let output;

    if (scale === 'celsius') {
        temp = "In Fahrenheit :";
        output = (input * 9/5) + 32;
    } else if (scale === 'fahrenheit') {
        temp = "In Celsius :";
        output = (input - 32) * 5/9;
    } else {
        output = 'Invalid scale';
    }

    document.getElementById('output').innerHTML = `${temp} ${output}`;
}
