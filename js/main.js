const auspiciantes = document.getElementById("auspiciantes");
let sponsors = [
    {
        nombre:"Geovanny Rojas",
        imagen:"https://picsum.photos/200"
    },
    {
        nombre:"Otro wey",
        imagen:"https://picsum.photos/200"
    },
    {
        nombre:"Otro otro wey",
        imagen:"https://picsum.photos/200"
    },
];


function llenarGrilla(){
    for(let i of sponsors){
        auspiciantes.innerHTML+= `
        <div class="card m-5" style="width: 18rem;">
            <img src="${i.imagen}" class="card-img-top" alt="${i.nombre}">
            <div class="card-body">
                <h5 class="card-title text-center">${i.nombre}</h5>
            </div>
        </div>
        `;
    }
}

llenarGrilla();