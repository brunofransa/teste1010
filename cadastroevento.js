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
    fetch(`https://xp41-soundgarden-api.herokuapp.com/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": data.get('nome'),
            "poster": "link da imagem",
            "attractions": data.get('atracoes').split(","),
            "description": data.get('descricao'),
            "scheduled": new Date(data.get('data')).toISOString(),
            "number_tickets": data.get('lotacao'),

        })
    }).then(
        function (response) {
            console.log(response);
            if (response.status == 201){
                alert("O seu evento foi criado com sucesso!");
                location.href = "/admin.html";
            }
        }
    );
})


