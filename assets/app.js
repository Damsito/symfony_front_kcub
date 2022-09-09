import "boosted";
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import "./styles/css/style.scss";
import './bootstrap';

document.getElementById('entreprise_checkbox_all_delete')?.addEventListener('change', function(e){
    e.preventDefault()
    document.querySelectorAll('#table tbody tr input[type="checkbox"]').forEach(element => {
        element.checked = e.currentTarget.checked
    })
})
