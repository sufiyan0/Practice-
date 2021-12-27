const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seats:not(.occupied)');
const price = document.getElementById('price');
const count = document.getElementById('noCount')
const movieSelect = document.getElementById('movies');
let ticketValue = +movieSelect.value;


function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seats.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    price.innerText = selectedSeatsCount  * ticketValue;
};


container.addEventListener('click', e => {
   if(e.target.classList.contains('seats')  &&
    !e.target.classList.contains('occupied')
   ) {
        e.target.classList.toggle('selected') 
        updateSelectedCount(); 
   }
    

});

movieSelect.addEventListener('change' , e => {
    ticketValue = +e.target.value;
    updateSelectedCount();
})

