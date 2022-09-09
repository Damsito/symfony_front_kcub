import { Controller } from '@hotwired/stimulus';
import Swal from 'sweetalert2';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;


export default class extends Controller {
    onSubmit(event) {
        event.preventDefault();
        Swal.fire({
            title: this.element.dataset.title,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: this.element.dataset.cancel,
            confirmButtonText: this.element.dataset.confirm,
        }).then((result) => {
            if (result.isConfirmed) {
                let table = document.getElementById('table');
                let numberEntreprises = table.querySelectorAll('tr')
                let urlSearchParams = new URLSearchParams();
                urlSearchParams.append('changePage', (numberEntreprises.length - 1 === 1).toString())
                window.location.href = this.element.dataset.path + "?" + urlSearchParams.toString();
            }
        })
    }
    onSubmitMultiple(event) {
        event.preventDefault();
        let table = document.getElementById('table');
        let checkboxes = table
            .querySelectorAll('tbody input[type="checkbox"]:checked')
        if(!checkboxes.length) return;
        Swal.fire({
            title: this.element.dataset.title,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: this.element.dataset.cancel,
            confirmButtonText: this.element.dataset.confirm,
        }).then((result) => {
            if (result.isConfirmed) {
                let values = [...checkboxes].map(e => e.value)
                let numberEntreprises = table.querySelectorAll('tbody tr')
                let urlSearchParams = new URLSearchParams();
                urlSearchParams.append('ids', values.join(','))
                urlSearchParams.append('changePage', (numberEntreprises.length - 1 === values.length).toString())
                window.location.href = this.element.dataset.path + "?" + urlSearchParams.toString();
            }
        })
    }
}