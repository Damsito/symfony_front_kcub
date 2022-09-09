import { Controller } from '@hotwired/stimulus';
import Swal from 'sweetalert2';
import $ from 'jquery';


export default class extends Controller {
    connect() {
        console.log('?');
    }
    onSubmit(event) {
        event.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = this.element.dataset.path;
            }
        })
    }
    onSubmitMultiple(event) {
        event.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                let checkboxes = document.getElementById('entreprise_table')
                    .querySelectorAll('input[type="checkbox"]:checked')
                $.post(this.element.dataset.path, {"arg1":"value1","_method":"delete"}, function(data){
                    console.log(data)
                    debugger
                });
                console.log(checkboxes)
                debugger
                window.location.href = this.element.dataset.path;
            }
        })
    }
}