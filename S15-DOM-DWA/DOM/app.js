/*document.querySelector('h1').textContent='Texto desde JavaScript'
console.log(document.querySelector('h1'));*/

//Modificando elementos
const parrafo = document.querySelector('#parrafo');

/*parrafo.textContent = 'texto desde JavaScript';*/
parrafo.innerHTML = '<strong>texto con inner</strong>';

parrafo.classList.add('h3-danger');
