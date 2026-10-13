const sumarNumeros = (num1, num2) => {return num1 + num2;}

const restaNumeros = (num1, num2) => {return num1 - num2;}

const multiplicarNumeros = (num1, num2) => {return num1 * num2;}

const dividirNumeros = (num1, num2) => {return num1 / num2;}

const getnumbers = () => {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    return [parseInt(num1), parseInt(num2)];
}
const menu = () => {
    return prompt("Seleccione una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");
};
    let option=0;
    let num1=0;
    let num2=0;
    let resultado=0;
    option=menu();
        switch (option) {
            case "1": {
                const [num1, num2] = getnumbers();
                const resultado = sumarNumeros(parseInt(num1), parseInt(num2));
                alert("El resultado es: " + resultado);
                break;
            }
            case "2": {
                const [num1, num2] = getnumbers();
                const resultado = restaNumeros(parseInt(num1), parseInt(num2));
                alert("El resultado es: " + resultado);
                break;
            }
            case "3": {
                const [num1, num2] = getnumbers();
                const resultado = multiplicarNumeros(parseInt(num1), parseInt(num2));
                alert("El resultado es: " + resultado);
                break;
            }
            case "4": {
                const [num1, num2] = getnumbers();
                const resultado = dividirNumeros(parseInt(num1), parseInt(num2));
                alert("El resultado es: " + resultado);
                break;
            }
            case "5": {
                alert("Saliendo...");
                break;
            }
            default:{alert("Opción no válida");}
        }