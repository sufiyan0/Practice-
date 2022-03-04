const forn = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'content success';
}

function showError(input,massage){
    const formControl = input.parentElement;
    formControl.className = 'content error';
    const small = formControl.querySelector('small')
    small.innerText = massage;
}

 
forn.addEventListener("submit", function(e){
    e.preventDefault();

    if(username.value === ''){
        showError(username,"required") 
    } else {
        showSuccess(username);
    };

    if(email.value === ''){
        showError(email,"required") 
    } else {
        showSuccess(email);
    };

    if(password.value === ''){
        showError(password,"required") 
    } else {
        showSuccess(password);
    };
    
    if(password1.value === ''){
        showError(password1,"required") 
    } else {
        showSuccess(password1);
    };
})