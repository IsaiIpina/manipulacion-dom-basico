let nombre = 'Isai';
let apellido = 'Ipina';
let user = '@isai97inn';
let edad  = 25;
let correo = 'isai97inn@gmail.com';
let mayorEdad = true;
let dineroahorrado = 22000;
let deuda = 5500;


let completeName = nombre + ' ' + apellido;
let realMoney = dineroahorrado - deuda;

console.log(completeName);
console.log(realMoney);

function completeName (name, lastName, nickname) {
    let complete = name + " " + lastName;
    console.log('Mi nombre es: '+complete + ", pero prefiero que me digan "+nickname);
}

completeName("isai", "ipina", "isa");

let typeOfSubs = "free";

if(typeOfSubs === "basic"){
    console.log("Puedes tomar casi todos los cursos de platzi durante un mes");
} else if(typeOfSubs === "free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if(typeOfSubs === "Expert") {
    console.log("Puedes tomar casi todos los cursos de platzi durante un año");
} else {
    console.log("Tu y alguien más pueden tomar TODOS los cursos de platzi durante un año");
}

let bandera = 0;
while(bandera < 5){
    console.log("El valor de i es de: "+ bandera);
    bandera++;
}

let bandera2 = 10;
while(bandera2 >= 2){
    console.log("El valor de i es de : " + bandera2);
    bandera2--;
}

function arraysito(array){
    console.log(array[0]);
}
arraysito(['isai','ipiña',"paulina"]);



//
const tipoDeSuscripciones = {
    free: "Puedes tomar los cursos gratis de platzi",
    basic: "Puedes tomar todos los cursos de platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de platzi durante un año",
    expertduo: "Puedes tomar todos los cursos de platzi durante 1 año"
};

function conseguirTipoSuscripcion(suscripcion){
    if(tipoDeSuscripciones[suscripcion]){
        console.log(tipoDeSuscripciones[suscripcion]);
        return;
    }
    console.warn('este tipo de suscripcion no existe');
}




//
