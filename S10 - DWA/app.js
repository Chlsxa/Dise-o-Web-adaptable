const cardPrincipal = document.getElementById(`card-principal`);

const spinner = document.getElementById('spinner');

spinner.innerHTML=`
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`

fetch("./public/data.json")
    .then((res) => {
        if (!res.ok){
            throw {ok: false, msg: "Error 404"}
        }
        return res.json();
    })
   .then((data) =>
    data.forEach((item) =>{
        cardPrincipal.innerHTML += Card(item);
    })

   )
   .catch((err) => cardPrincipal.innerHTML=" Error 404")
   .finally(() => {
    setTimeout(() =>{
        spinner.innerHTML=" ";
    }, 1000)
   });



//arrow function o funcion de flecha
const btnClass = (stock) => { 
    return stock > 0 ? "btn-primary" : "btn-danger disabled";
}

function Card(albums){
    const {album, artista, genero, stock} = albums;

    return `
    <div class="card mb-2" style="width: 18rem;">
       <div class="card-body">
         <h4 class="card-title">${album}</h4>
         <p class="card-text m-0 fs-5">${artista} - ${genero}.</p>
         <p class= "fs-6"> disp: ${stock} </p> 
         <a href="#" class="btn ${btnClass(stock)}">Comprar</a>
       </div>
    </div>
    `;
}
