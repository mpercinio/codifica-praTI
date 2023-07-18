function validationForm() {
    let validationCod = document.forms["register"]["cod"].value;
    let validationTitle = document.forms["register"]["title"].value;    
    let validationActor = document.forms["register"]["actor"].value;    
    let validationGenre = document.forms["register"]["genre"].value;

    if (validationCod == "") {
        alert("O Código deve ser preenchido");
        return false;
    }

    if (validationTitle == "") {
        alert("O Titulo deve ser preenchido");
        return false;
    }    
    if (validationActor == "") {
        alert("O Ator ou Atriz principal deve ser preenchido");
        return false;
    }

    if (validationGenre == "") {
        alert("O Genero  deve ser preenchido");
        return false;
    }
    alert("A Validação ocorreu de forma correta")
}

function insert() {
    let cod = document.forms["register"]["cod"].value;
    let title = document.forms["register"]["title"].value;    
    let actor = document.forms["register"]["actor"].value;
    let genre = document.forms["register"]["genre"].value;

    let table = document.querySelector(".table tbody");

    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <th scope="row">${cod}</th>
        <td></td>
        <td>${title}</td>
        <td>${actor}</td>
        <td>${genre}</td>
    `;

    table.appendChild(newRow);
    
} 