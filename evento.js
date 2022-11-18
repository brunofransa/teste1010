const tabela = document.getElementById("tabela");



fetch('https://xp41-soundgarden-api.herokuapp.com/events')
    .then((response) => response.json())
    .then((eventos) => {
        let index = 1
        for (let event of eventos) {
            tabela.innerHTML += template(index++, event.name, event.scheduled, event.attractions, event._id)
        }
    });



function template(index, name, scheduled, attractions, id) { //aqui ficam os parâmentros
    return `<tr>
    <th scope="row">${index}</th> 
    <td>${scheduled}</td>
    <td>${name}</td>
    <td>${attractions.join(",")}</td>  
    <td>
        <a href="reservas.html?id=${id}" class="btn btn-dark">ver reservas</a>
        <a href="editar-evento.html?id=${id}" class="btn btn-secondary">editar</a>
        <button data-id="${id}" onclick="excluir (this)" class="btn btn-danger">excluir</button>
    </td>
</tr>`
}

function excluir(botao) {
    console.log(botao.dataset);
    fetch(`https://xp41-soundgarden-api.herokuapp.com/events/${botao.dataset.id}`,{
        method: 'DELETE',
    }
    ) .then(function (response){
        console.log(response);
        location.reload();
    });
    
}

