//Need to make a calculator that has two inputs and also be able to return the result of +,-,*,/ somewhere in the DOM//

document.querySelector('#addition').addEventListener('click', add);
document.querySelector('#subtraction').addEventListener('click', subtract);
document.querySelector('#multiply').addEventListener('click', multiply);
document.querySelector('#divide').addEventListener('click', divide);

function getValues(){
    //Used google gemini to figure out how to use the Number()Method for this//
    const num1 = Number(document.querySelector('#num1').value);
    const num2 = Number(document.querySelector('#num2').value);
    return { num1, num2 };
}

function showResult(value){
    document.querySelector('#result').innerText = value; //Used google gemini to help me understand why to use innerText//
}

function add(){
    const { num1, num2 } = getValues();
    const result = num1 + num2
    showResult(result)
}

function subtract(){
    const { num1, num2 } = getValues();
    const result = num1 - num2
    showResult(result)
}

function multiply(){
    const { num1, num2 } = getValues();
    const result = num1 * num2
    showResult(result)
}

function divide(){
    const { num1, num2 } = getValues();
    if (num2 === 0) {
        showResult("You can not divide by 0.")
    } else {
        showResult(num1 / num2);
    }
}