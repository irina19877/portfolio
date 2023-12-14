const btnBox = document.querySelector('.btn-box');
const display = document.querySelector('#display');
let num1 = null;
let num2 = null;
let isFirstNum = true;
let selectedAction = null;
let result = null;
let displayValue = '';

btnBox.addEventListener('click', (e) => {
    const textValue = e.target.innerText;
    const numbertextValue = Number(textValue)
    if(typeof numbertextValue === 'number' && !isNaN(numbertextValue)){
        setNumberValue(textValue);
    } else {
        if(isAction(textValue)){
            isFirstNum = false;
            if(!num2){
                selectedAction = textValue;
            }
        } else if(textValue === '='){
            getResult();
            num1 = null;
            num2 = null;
            selectedAction = null;
            isFirstNum = true;
        }
    }
    setDisplay(textValue);
})



function setNumberValue(value){
    if(isFirstNum) {
        if(!num1){
            num1 = String(value);
        } else {
            num1 += String(value)
        }
    } else {
        if(!num2){
            num2 = String(value);
        } else {
            num2 += String(value)
        }
    }
}

function isAction(value){
    const actions = ['+', '-', '*', '/']
    return actions.includes(value)
}

function getResult(){
    switch(selectedAction) {
        case '+':
            result = Number(num1) + Number(num2);
            break;
        case '-':
            result = Number(num1) - Number(num2);
            break;
        case '*':
            result = Number(num1) * Number(num2);
            break;
        case '/':
            result = Number(num1) / Number(num2);
            break;
        default:
            console.error('Не корректное значение арифметической операции');
    }
}

function setDisplay(value){
    if(value === '='){
        display.value = result;
    } else {
        display.value = `${num1} ${selectedAction} ${num2}`.replaceAll('null', '');
    }
    
}