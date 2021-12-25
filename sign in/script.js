// get DOM Elements
const form = document.getElementById("form")
const uname = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");

function showError(input, massage){
    const formControl =input.parentElement; 
    formControl.className = "content error"
    const small = formControl.querySelector('small')
    small.innerText = massage;
};

function showSuccess(input){
    const formControl = input.parentElement; 
    formControl.className = "content success"
};


function validEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
};

function checkRequired(inpurArray) {

    inpurArray.forEach(function(input) {

        if(input.value === ''){
            showError(input,`${getFieldId(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

function getFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function checkLength(input, min, max,) {
    
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log("sufiyan");

    checkRequired([uname,email,password,password1]);
    checkLength(uname,3,10);
    checkLength(password,6,30);
})