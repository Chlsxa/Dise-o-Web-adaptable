//Objetos literales, no indexados

const animal = {
    color: "Naranja",
    nombre: "Simba",
    rugiendo: true
};

console.log("Este león es de color " + animal.color);
console.log("y su nomre es: " + animal.nombre);

console.log(animal["rugiendo"]);