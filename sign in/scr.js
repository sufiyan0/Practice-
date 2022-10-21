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

function checkRequired(input){
    
    input.forEach(function(input) {
        if(input.value === '') {
            showError(input,`${input.id} is required`)
        }else {
            showSuccess(input)
        }
    })

}


function checkEmail(input){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //return re.test(String(email).toLowerCase());
    if( re.test(input.value.trim())) {
        showSuccess(input);
    }else{
        showError(input, "Invalid Email");
    }
};

function checkLength(input,min,max){
    if (input.value.length < min){
        showError(input,`${input.id} must be atleast ${min} charectors `);
    }else if(input.value.length > max){
        showError(input,`${input.id} must be less then ${max} charectprs `);
    }else{
        showSuccess(input);
    }
}

function confirmPassword(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,`Passwod not match`);
    }
}

 
forn.addEventListener("submit", function(e){
    e.preventDefault();
    checkRequired([username,email,password,password1]);
    checkLength(username,3,20);
    checkLength(password,6,30);
    confirmPassword(password,password1);
    checkEmail(email);


})