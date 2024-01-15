function Add_Qty() {
    let value = parseInt(document.querySelector("#number").value);
    value++;
    document.querySelector("#number").value = value
    console.log(value);
}
function Sub_Qty() {
    let value = parseInt(document.querySelector("#number").value);
    if (value > 0) {
        value--;
        document.querySelector("#number").value = value;
        console.log(value);
    }
    value = "0";
}
function Add_Qty1() {
    let value = parseInt(document.querySelector("#number1").value);
    value++;
    document.querySelector("#number1").value = value
    console.log(value);
}
function Sub_Qty1() {
    let value = parseInt(document.querySelector("#number1").value);
    if (value > 0) {
        value--;
        document.querySelector("#number1").value = value;
        console.log(value);
    }
    value = "0";
}
function Add_Qty2() {
    let value = parseInt(document.querySelector("#number2").value);
    value++;
    document.querySelector("#number2").value = value
    console.log(value);
}
function Sub_Qty2() {
    let value = parseInt(document.querySelector("#number2").value);
    if (value > 0) {
        value--;
        document.querySelector("#number2").value = value;
        console.log(value);
    } value = "0";
}
function addToCart() {
    let currentValue = parseInt(document.getElementById("number").value);

    // Store the original value
    originalValue = currentValue;

    // Reset the value to zero
    document.getElementById("number").value = 0;

    // Display and log the original value
    document.getElementById("result1").innerHTML = originalValue*100;
    console.log("Original Value: " + originalValue);
}
function addToCart1() {
    let currentValue = parseInt(document.getElementById("number1").value);

    // Store the original value
    originalValue = currentValue;

    // Reset the value to zero
    document.getElementById("number1").value = 0;

    // Display and log the original value
    document.getElementById("result2").innerHTML = originalValue*200;
    console.log("Original Value: " + originalValue);
}
function addToCart2() {
    let currentValue = parseInt(document.getElementById("number2").value);

    // Store the original value
    originalValue = currentValue;

    // Reset the value to zero
    document.getElementById("number2").value = 0;

    // Display and log the original value
    document.getElementById("result3").innerHTML = originalValue*300;
    console.log("Original Value: " + originalValue);
}