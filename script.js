// 1
function ButGenBackground(color){
    document.body.style.background = color;
}
// 2
const calc = document.getElementById("calc");
calc.addEventListener('submit', function(calculate) {
    calculate.preventDefault();  
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
    }
    alert(result);
});