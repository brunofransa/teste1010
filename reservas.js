const id = location.search.split("?id=")[1]
fetch(`https://xp41-soundgarden-api.herokuapp.com/bookings/event/${id}`)
.then (function (response){
    return response.json ()
})
    .then((reservas) => {
        let index = 1
        console.log(reservas)
        for (let event of reservas) {
            tabela.innerHTML += template(event._id, event.owner_email, event.owner_name, event.number_tickets)

        }
    });



function template(id, email, name, tickets) { //aqui ficam os parâmentros
    return `<tr>
    <th scope="row">${id}</th> 
    <td>${email}</td>
    <td>${name}</td>
    <td>${tickets}</td>  
    <td>
        
    </td>
</tr>`
}