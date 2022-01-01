// Import DOM element
const currencyOne = document.getElementById('currency-one');
const ammountOne = document.getElementById('ammount-one');
const currencyTwo = document.getElementById('currency-two');
const ammountTwo = document.getElementById('ammount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate(){
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;
    console.log(currencyOneCode ,currencyTwoCode);

    fetch(`https://v6.exchangerate-api.com/v6/74880aa99ce819a75abe767a/pair/${currencyOneCode}/${currencyTwoCode}`)
    .then(rest => rest.json())
    .then(data => {
        console.log(data);
        const conversionRate = data.conversion_rate;
        rate.innerText = conversionRate;
        ammountTwo.value = (ammountOne.value * conversionRate).toFixed(2) ; 
        // ammountOne.value = ammountTwo.value * conversionRate;
    });

};

// Event Listners
currencyOne.addEventListener('change', calculate);
ammountOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
ammountTwo.addEventListener('input', calculate);
swap.addEventListener('click', e => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
});




