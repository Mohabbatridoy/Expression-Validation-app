document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const expressionType = document.getElementById('expressionType').value;
    const userInput = document.getElementById('userInput').value;
    const resultDiv = document.getElementById('result');
    
    let regex;
    let isValid = false;
    
    switch (expressionType) {
        case 'email':
            regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            isValid = regex.test(userInput);
            break;
        case 'phone':
            regex = /^\d{10}$/;
            isValid = regex.test(userInput);
            break;
        case 'postcode':
            regex = /^\d{4}$/;
            isValid = regex.test(userInput);
            break;
        default:
            resultDiv.textContent = 'Please select a valid expression type.';
            return;
    }
    
    if (isValid) {
        resultDiv.textContent = 'The expression is valid.';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'The expression is invalid.';
        resultDiv.style.color = 'red';
    }
});
