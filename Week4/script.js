document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.querySelector('.input-text');
    const acButton = document.querySelector('.reset');
    let currentNumber = '';
    let previousNumber = '';
    let currentOperator = '';
    let operatorClicked = false;

    const updateDisplay = () => {
        inputText.value = currentNumber;
    };

    const clearData = () => {
        currentNumber = '';
        previousNumber = '';
        currentOperator = '';
        acButton.innerText = 'AC';
    };

    const operate = () => {
        
        previousNumber = parseFloat(previousNumber);
        currentNumber = parseFloat(currentNumber);
        
        switch (currentOperator) {
            case '+':
                currentNumber = previousNumber + currentNumber;
                break;
            case '-':
                currentNumber = previousNumber - currentNumber;
                break;
            case '×':
                currentNumber = previousNumber * currentNumber;
                break;
            case '÷':
                currentNumber = previousNumber / currentNumber;
                break;
            case '+/-':
                currentNumber = previousNumber * -1;
            default:
                return;
        }
        currentOperator = '';
    };
    
    document
        .querySelector('.button-area')
        .addEventListener('click', function (x) {
            const buttonValue = x.target.innerText;
            acButton.innerText = 'C';
            if (x.target.matches('.number')) {
                if (operatorClicked) {
                    currentNumber = '';
                    operatorClicked = false;
                }
                currentNumber += buttonValue;
                updateDisplay();
            }
            else if (!previousNumber) {
                previousNumber = currentNumber;
                currentNumber = '';
            }

            if (buttonValue === '=') {
                if (previousNumber && currentOperator) {
                    operate();
                    updateDisplay();
                    previousNumber = '';
                }
            }
            else if (['+', '-', '×', '÷'].includes(buttonValue)) {
                currentOperator = buttonValue;
                currentNumber = buttonValue;
                updateDisplay();
                operatorClicked = true;
            }
            else if (x.target.matches('.reset')) {
                clearData();
                updateDisplay();
            }
        });
});