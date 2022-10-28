const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// calculate function for getting api and update GUI 
function calculate(){

    currencyOneValue = currencyOne.value;
    currencyTwoValue = currencyTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/74880aa99ce819a75abe767a/pair/${currencyOneValue}/${currencyTwoValue}`)
    .then(res => res.json())
    .then(data => {
        const currencyrate = data.conversion_rate;
        // rate.innerText = currencyrate;
        amountTwo.value = (amountOne.value * currencyrate).toFixed(2) ;
    })
}


//  Events Listeners
currencyOne.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);
currencyTwo.addEventListener('change',calculate);
amountTwo.addEventListener('input',calculate);
// Eventlistener for swap button to exchange the value
swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();




})
calculate();