import "boosted";
import "./styles/css/style.scss";
import './bootstrap';

document.getElementById('checkbox_all_delete')?.addEventListener('change', function(e){
    document.querySelectorAll('#table tbody tr input[type="checkbox"]').forEach(element => {
        element.checked = e.currentTarget.checked
    })
})

document.querySelector('table thead .btn-trash').style.display = "none";
document.querySelectorAll('table input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function (e){
        let table = document.getElementById('table');
        let checkboxes = table
            .querySelectorAll('tbody input[type="checkbox"]:checked')
        if(checkboxes.length > 0){
            document.querySelector('table thead .btn-trash').style.display = "block";
        } else {
            document.querySelector('table thead .btn-trash').style.display = "none";
        }
    })
})