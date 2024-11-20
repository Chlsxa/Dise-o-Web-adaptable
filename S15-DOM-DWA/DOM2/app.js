const lista = document.getElementById('lista');

/*const li = document.createElement('li'); //se crea la variable que creara el elemento
li.textContent = 'primer elemento';

lista.appendChild(li);*/

//crear array
const arrayElemnt =['primer elemento', 'segundo', 'tercero', 'este es el cuarto elemento'];
//correr el array
/*arrayElemnt.forEach(item => {
    const li =document.createElement('li'); //se creo el li en la primer iteración
    li.textContent = item; //su contenido sera item porque tiene los elementos del array

    lista.appendChild(li);
})*/

//Fragment
const fragment = document.createDocumentFragment();

arrayElemnt.forEach((item) =>{

    const li = document.createElement("li");
    li.textContent = item;

    const childNode = fragment.firstChild;

    fragment.insertBefore(li, childNode);
});
/*console.log(fragment);*/

lista.appendChild(fragment);