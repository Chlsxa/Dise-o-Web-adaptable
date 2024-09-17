const animal = {
    color: "azul",
    nombre: "Torogoz",
    volando: true
}

//destructuring

const {color, nombre, volando} = animal;
console.log("El " + nombre + " es de color:" + color);

//arrays indexados
const frutas = ["pera", "manzana", "sandía"];


//destructuring  array
const [pera, manzana, sandia] = frutas;
console.log("Me gusta mucho la: " + sandia); 