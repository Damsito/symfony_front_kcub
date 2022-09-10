window.addEventListener('DOMContentLoaded', function(e){
    document.getElementById('entreprise_filter_type').addEventListener('change', function(e){
        e.preventDefault()
        document.getElementById('buttonSearch').click();
    })
    document.querySelector('table thead .btn-trash').addEventListener('click', function (e){
        e.preventDefault()
        let table = document.getElementById('table');
        let checkboxes = table
            .querySelectorAll('tbody input[type="checkbox"]:checked')
        if(!checkboxes.length) return;
        console.log(checkboxes)
        let values = [...checkboxes].map(e => e.value)
        let numberEntreprises = table.querySelectorAll('tbody tr').length
        let modalForm = document.querySelector('#modalDeleteMultipleEntreprises form')
        modalForm.querySelectorAll('input[name="ids"]').forEach(input => {
            input.remove();
        })
        let input = createInput(
            {name: "ids", type: "hidden", value: values.toString() }
        )
        let changePageInput = createInput(
            {name: "changePage", type: "hidden", value: numberEntreprises === values.length }
        )
        modalForm.appendChild(input)
        modalForm.appendChild(changePageInput)
    })
    document.querySelectorAll('table tbody .btn-trash').forEach(trash => {
        console.log(trash)
        trash.addEventListener('click', function(e){
            let modalForm = document.querySelector('#modalDeleteOneEntreprise form')
            modalForm.querySelectorAll('input[name="id"]').forEach(input => {
                input.remove();
            })
            let input = createInput(
                {name: "id", type: "hidden", value: e.currentTarget.dataset.id }
            )
            let table = document.getElementById('table');
            let numberEntreprises = table.querySelectorAll('tbody tr').length
            let changePageInput = createInput(
                {name: "changePage", type: "hidden", value: numberEntreprises === 1 }
            )
            modalForm.appendChild(input)
            modalForm.appendChild(changePageInput)
        })
    })

})
function createInput({name, type, value}){
    let input = document.createElement('input');
    input.name = name;
    input.type = type;
    input.value = value;
    return input;
}