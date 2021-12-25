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


function checkEmail(input){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    //return re.test(String(email).toLowerCase());
    if( re.test(input.value.trim())) {
        showSuccess(input);
    }else{
        showError(input, "Invalid Email");
    }
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
        if (input.value.length < min) {
            showError(input, `${getFieldId(input)} needs to be at least ${min} charactor`);
        }else if (input.value.length > max) {
            showError(input, `${getFieldId(input)} needs to be less then ${max} charactor`);
        }else {
            showSuccess(input);
        }

};

function confirmPassword(input1,input2) {
    if ( input1.value !== input2.value) {
        showError(input2, "Password don't match ")
    } 
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log("sufiyan");

    checkRequired([uname,email,password,password1]);
    checkLength(uname,3,15);
    checkLength(password,6,30);
    checkEmail(email);
    confirmPassword(password,password1);
})