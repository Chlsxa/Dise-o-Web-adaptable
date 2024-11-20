const lista = document.querySelector('#lista');

const arrayElemnt = ['primer elemento', 'segundo', 'tercero', 'cuarto item'];

/*const fragment = document.createDocumentFragment();

arrayElemnt.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("list");

    const b = document.createElement("b");
    b.textContent = "Nombre: ";
    li.appendChild(b);

    const span = document.createElement("span");
    span.classList.add("text-danger");
    span.textContent = item;
    li.appendChild(span);

    fragment.appendChild(li);

});

lista.appendChild(fragment);*/

/*let fragment = '';
arrayElemnt.forEach((item) =>{
    fragment += `
    <li class="list">
        <b>Nombre: </b> <span class="text-danger">${item}</span>
    </li>
    `
});

lista.innerHTML = fragment;*/

const template = document.querySelector('#template-li').content;
const fragment = document.createDocumentFragment();

arrayElemnt.forEach((item) =>{

    template.querySelector('.list span').textContent = item;

    const clone = template.cloneNode(true);
    fragment.appendChild(clone);
});

lista.appendChild(fragment);