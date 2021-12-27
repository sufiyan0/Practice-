const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seats:not(.occupied)');
const price = document.getElementById('price');
const count = document.getElementById('noCount')
const movieSelect = document.getElementById('movies');
let ticketValue = +movieSelect.value;



container.addEventListener('click', e => {
    console.log(e.target);

});

