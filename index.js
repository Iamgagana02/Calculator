let currentInput = "";

// Function to append a number to the current input
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Function to append an operator to the current input
function appendOperator(op) {
    currentInput += op;
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

// Function to calculate the result
function calculateResult() {
    if (currentInput === "") return;
    
    let result;
    try {
        result = eval(currentInput);  // Use eval to evaluate the expression (Note: be cautious with eval in real-world apps)
        currentInput = result.toString();
    } catch (error) {
        currentInput = "Error";
    }
    updateDisplay();
}

// Function to update the display with the current input
function updateDisplay() {
    document.getElementById("display").value = currentInput;
}
