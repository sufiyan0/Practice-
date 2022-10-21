const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('noCount');
const total = document.getElementById('price');
const movieSelect = document.getElementById('movies');

let ticketPrice = movieSelect.value;



function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seats.selected'); 
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

container.addEventListener("click", e => {
    if (e.target.classList.contains('seats') && 
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})

movieSelect.addEventListener('change', e =>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

