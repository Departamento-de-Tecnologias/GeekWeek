let participantes = [
    {
        id:2,
        nombre:'Aitana Ximena Espín Olaya',
        personaje:'Yor Forger - SPY X FAMILY',
        foto:'http://drive.google.com/uc?export=view&id=1MV3TOxKxtF-rvWb7yolc0uAFyS8jhVKL',
        video:'http://drive.google.com/uc?export=view&id=1TOwSpKx8sjj0mkZpVJtxhwywdep-_bBc'
    },
    {
        id:1,
        nombre:'Gustavo Andrés González Puertas',
        personaje:'Nick Wilde - Zootopia',
        foto:'http://drive.google.com/uc?export=view&id=1w0lh-3g6f7-SSOBeTqHnsj9QCgkO7DMQ',
        video:'http://drive.google.com/uc?export=view&id=1V3QQq-n_QRN-jdau0LVgR5epQJrjvyRI'
    },
    {
        id:3,
        nombre:'Nicole Madelayne Morán Mendoza ',
        personaje:'Hange Zoe - Shigenki no Kyojin',
        foto:'http://drive.google.com/uc?export=view&id=1jJ7gmuD44qAb2AibcBWsQTF3XuVb-SaQ',
        video:'http://drive.google.com/uc?export=view&id=1zPnLM7P0gIM6NXpC4K76-Y3q-UrM10Fl'
    }
]


function llenarGrilla(){
    for(let i of participantes){
        auspiciantes.innerHTML+= `
        <div class="card m-5" style="width: 25rem;">
            <img src="${i.foto}" class="card-img p-1 mx-auto" alt="${i.nombre}" style="width:100%; height:550px">
            <div class="card-body">
                <h5 class="card-title text-center">${i.nombre}</h5>
                <p class="card-title text-center">${i.personaje}</p>
            </div>
            <div class=" d-flex justify-content-around m-4"> 
                <a href="${i.video}"><button type="button" class="btn btn-warning">Ver Video</button></a>
                <button type="button" class="btn btn-warning" id="${i.id}">Me Gusta </button>
            </div>
        </div>
        `;
    }
}

llenarGrilla();
