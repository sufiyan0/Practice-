// Dom Elements
const submit = document.getElementById('submit');
const input = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const reasultHeading = document.getElementById('reasult-heading');
const meals = document.getElementById('meals')
const selectedMeal = document.getElementById('selected-meals');

// function to search meal 
function searchMeal(e){
    // preventDefault is use to stop refresh the page
    e.preventDefault();
    // input is a field where user input enter the search key to find the product
    const searchValue = input.value;
    // creating a condition to remove the extra spaces from the search bar and then go ahad
    // trim is use to remove extra spaces from input 
    if(searchValue.trim()){
        // fetching api from themealbd to find the specific result 
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            // updating the result heading 
            reasultHeading.innerHTML = `<h2>Search results for ${searchValue}</h2>`;
            // if no result obtain run this code
            if (data.meals === null) {
                reasultHeading.innerHTML = `<h2>No data obtain for Search  ${searchValue}</h2>`;
                // if result obtain then update DOM and UI
            } else {
                // Find result in array so run map function to iterate each element of array and run specific task
                meals.innerHTML = data.meals.map(meal => `

                <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <div class="meal-info"  data-MealIf="${meal.idMeal}">
                    <h3>${meal.strMeal}</h3>
                    </div>
                </div>
                `)
                .join('');
            }
        })
        // clear the search value from input section 
        input.value = '';
    } else {
        // condition if user input only spaces and invald search 
        alert('Plese enter a valid keyword for batter output')
    }
    selectedMeal.innerHTML = '';
}

// function to display specific meal details and update dom
function displayMealData(mealData){
    // console.log(mealData.strIngredient1)
    const ingredients = [];
    for(let i = 1;i<=20;i++){
        if(mealData[`strIngredient${i}`]){
           
            ingredients.push(`${mealData[`strIngredient${i}`]}   :   ${mealData[`strMeasure${i}`]} `)
        }else{
            break;
        }
    }
        // Updating DOM to display the meal recipy and ingredients
        selectedMeal.innerHTML = `
        <div class='selected-meal-info'>
            <h1>${mealData.strMeal}</h1>
            <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
            <div class="hed" >
                <h2>Category :  ${mealData.strCategory}</h2>
                <h3>Dish :  ${mealData.strArea}</h3>
            </div>
            <h2>Instructions</h2>
            <p>${mealData.strInstructions}</p>
            <h2> Ingredients</h2>
            <ul class='ingredients-details'>
                ${ingredients.map(item => `
                    <li>${item}</li>
                `).join()
            }

            </ul>
            <div class="Yuthed">
                <h4>Youtube link</h4>
                <h5>${mealData.strYoutube}</h5>
            </div>
        </div>
        `
        reasultHeading.innerHTML = '';
        meals.innerHTML = '';

        
     
    // console.log(ingredients)

    

};
// Function to find meal details by fetching API of meal details
function mealDetails(mealIds){
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealIds}`)
    .then(res => res.json())
    .then(data => {
        // lock the data of first element 
        const mealData = data.meals[0]
        // Pass the data to the function to update dom
        displayMealData(mealData);
    })


}
// Events Listeners
submit.addEventListener('submit', searchMeal);
// Event listiner to catch selected meal
meals.addEventListener('click' , e => {
    // checking the path to display the specific result
    const mealInfo = e.path.find(item => {
        // finding every selected classList
        const itemContainer = item.classList;
        // if classList is not empty so get meal-info field
        if(itemContainer){
            return item.classList.contains('meal-info')
        }else{
            return false;
        }
    })

    // After getting meal info get meal id  
    if(mealInfo){
        // lock meal id
        const mealIds = mealInfo.getAttribute('data-MealIf')
        console.log(mealIds) 
        // function to display meal details is UI
        mealDetails(mealIds);
    }
})