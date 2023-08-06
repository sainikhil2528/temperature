let selectElement = document.getElementById("selectTemprature");
let inputElement = document.getElementById("tempNum");
let spanElement = document.getElementById("resultEl");
let convertBtn = document.getElementById("convertBtn");
let resetBtn = document.getElementById("resetBtn");
let textElement = document.getElementById("textElement")
let errMsg = document.getElementById("errMsg")
selectElement.addEventListener("change", function(event) {
    convertBtn.addEventListener("click", function(vent) {
        textElement.classList.remove("d-none")
        errMsg.textContent = ""
        if (inputElement.value !== "" && typeof(parseFloat(inputElement.value)) === "number") {
            if (selectElement.value === "Celcius to Kelvin") {
                let temp = parseFloat(inputElement.value) + 273.15;
                spanElement.textContent = "Kelvin = " + JSON.stringify(temp) + "K";
            } else if (selectElement.value === "Celcius to Fahrenheit") {
                let temp = parseFloat(inputElement.value) * (9 / 5) + 32;
                spanElement.textContent = "Fahrenheit = " + JSON.stringify(temp) + "F";
            } else if (selectElement.value === "Kelvin to Celcius") {
                let temp = parseFloat(inputElement.value) - 273.15;
                spanElement.textContent = "Celcius = " + JSON.stringify(temp) + "C";
            } else if (selectElement.value === "kelvin to Fahrenheit") {
                let temp = (parseFloat(inputElement.value) - 273.15) * (9 / 5) + 32;
                spanElement.textContent = "Fahrenheit = " + JSON.stringify(temp) + "F";
            } else if (selectElement.value === "Fahrenheit to Celcius") {
                let temp = (((parseFloat(inputElement.value) - 32)) * 5) / 9;
                spanElement.textContent = "Celcius = " + JSON.stringify(temp) + "C";
            } else if (selectElement.value === "Fahrenheit to Kelvin") {
                let temp = (parseFloat(inputElement.value) - 32) * (5 / 9) + 273.15;
                spanElement.textContent = "Kelvin = " + JSON.stringify(temp) + "K";
            }
        } else {
            errMsg.textContent = "Please enter a valid input"
            textElement.classList.add("d-none")
        }
    })
    resetBtn.addEventListener("click", function(reset) {
        textElement.classList.add("d-none");
        inputElement.value = "";
        errMsg.textContent = ""
    })
})
convertBtn.addEventListener("click", function(vent) {
    if (inputElement.value !== "" && typeof(parseFloat(inputElement.value)) === "number") {
        if (selectElement.value === "Celcius to Kelvin") {
            errMsg.textContent = ""
            textElement.classList.remove("d-none")
            let temp = parseFloat(inputElement.value) + 273.15;
            spanElement.textContent = "Kelvin = " + JSON.stringify(temp) + "K";
        }
    } else {
        errMsg.textContent = "Please enter a valid input"
        textElement.classList.add("d-none")
    }

})
resetBtn.addEventListener("click", function(reset) {
    textElement.classList.add("d-none");
    inputElement.value = "";
    errMsg.textContent = ""
})