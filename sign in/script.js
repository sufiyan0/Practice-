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



form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log("sufiyan");

    if (uname.value === ''){
        showError(uname , "UserName is  Required");
    }else{
        showSuccess(uname);
    }

    if (email.value === ''){
        showError(email , "Email is Required");
    }else{
        showSuccess(email);
    }

    if (password.value === ''){
        showError(password , "Password is Required");
    }else{
        showSuccess(password);
    }


        if (password1.value === ''){
            showError(password1 , "confirm Your password");
        }else{
            showSuccess(password1);

        }
})