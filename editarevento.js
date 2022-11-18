const id = location.search.split("?id=")[1]
console.log(id)
const nome = document.getElementById("nome")
const banner = document.getElementById("banner")
const atracoes = document.getElementById("atracoes")
const descricao = document.getElementById("descricao")
const data = document.getElementById("data")
const lotacao = document.getElementById("lotacao")
fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`)
.then (function (response){
    return response.json ()
}).then (function (evento){
    console.log(evento)
    nome.value = evento.name
    banner.value = evento.poster
    atracoes.value = evento.attractions.join(",")
    descricao.value = evento.description
    data.value = evento.scheduled
    lotacao.value = evento.number_tickets
    
})

const formularioevento = document.getElementById("formularioevento");

formularioevento.addEventListener('submit', function (e) {
    console.log(e);
    const data = new FormData(e.target);
    console.log(data.get('nome'));
    console.log(data.get('atracoes'));
    console.log(data.get('descricao'));
    console.log(data.get('data'));
    console.log(data.get('lotacao'));
    e.preventDefault()
    fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": data.get('nome'),
            "poster": data.get("banner"),
            "attractions": data.get('atracoes').split(","),
            "description": data.get('descricao'),
            "scheduled": new Date(data.get('data')).toISOString(),
            "number_tickets": data.get('lotacao'),

        })
    }).then(
        function (response) {
            console.log(response);
            if (response.status == 200){
                alert("O seu evento foi atualizado com sucesso!");
                location.href = "/admin.html"; //soundgarden-front-main/admin.html
            }
        }
    );
})


