const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#Result');
const selectOperacion = document.querySelector('#operacion');

function btnOnClick() {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    const operacion = selectOperacion.value;

    if (isNaN(num1) || isNaN(num2)) {
        pResult.innerText = "Por favor, ingrese números válidos.";
        return;
    }

    let resultado;
    switch (operacion) {
    case 'suma':
        resultado = num1 + num2;
        break;
    case 'resta':
         resultado = num1 - num2;
        break;
    case 'multiplicacion':
        resultado = num1 * num2;
        break;
    case 'division':
        if (num2 === 0) {
            pResult.innerText = "No se puede dividir por cero.";
            return;
            }
        resultado = num1 / num2;
        break;
    default:
        pResult.innerText = "Operación no válida.";
        return;
    }

    pResult.innerText = `Resultado de ${operacion}: ${resultado}`;
}





 