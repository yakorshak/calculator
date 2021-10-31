const culculatorElements = document.querySelector('.calculator-grid');
const allClearButton = document.querySelector('.button__all-clear');
const operationButtons = document.querySelector('.calculator-grid');
const calculationResultButton = document.querySelector('.button__equal');
const deleteButton = document.querySelector('.button__delete');

function showOutputValue(value) {
    const outputObject = document.querySelector('.current-operand');
    outputObject.append(value);
}

function getOutputValue() {
    const outputObject = document.querySelector('.current-operand');
    outputValue = outputObject.innerHTML;
    return outputValue;
}

function getButtonValue(event) {
    const buttonObject = event.target;
    const buttonValue = buttonObject.innerHTML; 
    return buttonValue;
}

function clearOutput(){
    let outputObject = document.querySelector('.current-operand');
    outputObject.innerHTML = "";
}

function deleteLastDigit(){
    const outputObject = document.querySelector('.current-operand');
    let outputElements = outputObject.innerHTML;
    let outputWithoutLastDigit = outputElements.substring(0, outputElements.length - 1);
    return outputWithoutLastDigit;
}

culculatorElements.addEventListener('click', function(event){
    if (event.target.closest('.button__number')) {
        buttonValue = getButtonValue(event);
        showOutputValue(buttonValue);
    }
} );

allClearButton.addEventListener('click', function(event) {
    if (event.target.closest('.button__all-clear')){
        clearOutput();
    }
} );

operationButtons.addEventListener('click', function(event) {
    if (event.target.closest('.button__operation')){
        buttonValue = getButtonValue(event);
        showOutputValue(buttonValue);
    }
} );

calculationResultButton.addEventListener('click', function(event) {
    if (event.target.closest('.button__equal')){
        let outputValue = getOutputValue();
        let result = eval(outputValue);
        clearOutput();
        showOutputValue(result);
    }
} );

deleteButton.addEventListener('click', function(event) {
    if (event.target.closest('.button__delete')){
       let result = deleteLastDigit();
       clearOutput();
       showOutputValue(result);
}
} );







