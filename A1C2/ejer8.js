//Destructuring

const animal = {
    color: "Naranja",
    nombre: "Simba",
    rugiendo: true,
    favoritos: {
        dia: {
            ok: true,
        },
        noche:{
            ok: false
        }
    }
};


//guarda el valor de la propiedad color en una const
const color = animal.color;
const nombre = animal.nombre;

console.log("color: " + color + ", animal: " + nombre);