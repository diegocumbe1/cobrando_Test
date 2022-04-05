
// npm i readline-sync // para leer desded la terminal
const interface = require('readline-sync') 
let response = "";
do{
    console.log("1, - sumar");
    console.log("2, - restar");
    console.log("3, - multiplicar");
    console.log("4, - dividir");
    console.log("5, - salir");

    response = interface.question("escribe el numero correspondiente a la operacion que deseas realizar:   ");
    if(response !="5"){
        const primerNumero = interface.question(" escribe el primer numero:  ");
        const segundoNumero = interface.question(" escribe el segundo numero:  ")

        switch(response){
            case "1":
                var resultado = parseInt(primerNumero) + parseInt(segundoNumero);
                console.log(`El resultado de la suma de ${primerNumero} + ${segundoNumero} es :`,resultado)
            break;

            case "2":
                var resultado = parseInt(primerNumero) - parseInt(segundoNumero);
                console.log(`El resultado de la resta de ${primerNumero} - ${segundoNumero} es :`,resultado)
            break;

            case "3":
                var resultado = parseInt(primerNumero) * parseInt(segundoNumero);
                console.log(`El resultado de la multiplicacion de ${primerNumero} * ${segundoNumero} es :`,resultado)
            break;

            case "4":
                var resultado = parseInt(primerNumero) / parseInt(segundoNumero);
                console.log(`El resultado de la division de ${primerNumero} / ${segundoNumero} es :`,resultado)
            break;

            default:
            break;
        }
    }
}while(response !="5")