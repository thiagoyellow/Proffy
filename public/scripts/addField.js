// procurar o botão
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField () {
    // Duplicar os campos. Que campos ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos inseridos
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpa ele
        field.value=""
    })

    //colocar na pagina: onde??
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
