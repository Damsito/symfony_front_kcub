import TomSelect from "tom-select";
let locale = document.getElementById('select-lang').dataset.locale;
new TomSelect('#select-lang',{
    maxItems: 1,
    valueField: 'value',
    labelField: 'value',
    controlInput: null,
    options: [
        {value: 'fr', src: '/images/icons/france.png'},
        {value: 'en', src: '/images/icons/royaume-uni.png'}
    ],
    items: [locale || 'fr'],
    onChange: function(values) {
        return window.location.href = this.input.dataset[values]
    },
    render: {
        option: function(item) {
            return `<div><img alt="${item.src}" src="${item.src}" /></div>`;
        },
        item: function(item) {
            return `<div><img alt="${item.src}" src="${item.src}" /></div>`;
        },
    },
})