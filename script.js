
// Below code for Styling the HTML Page

// OPEN AND CLOSE EYE FOR PASSWORD CHECKING AT THE SIGN UP TIME 
const createTogglePassword = document.querySelector('#createTogglePassword');
const create_password = document.querySelector('#create_password');
createTogglePassword.addEventListener('click', function (e) {
    const type = create_password.getAttribute('type') === 'password' ? 'text' : 'password';
    create_password.setAttribute('type', type);
    // toggle the eye slash icon 
    // createTogglePassword.classList.toggle("ri-eye-line");
    if(type === "password"){
        createTogglePassword.classList.add("ri-eye-off-line");
        createTogglePassword.classList.remove("ri-eye-line");
    }
    else{
        createTogglePassword.classList.add("ri-eye-line");
        createTogglePassword.classList.remove("ri-eye-off-line");
    }
});


const confirmTogglePassword = document.querySelector('#confirmTogglePassword');
const confirm_password = document.querySelector('#confirm_password');
confirmTogglePassword.addEventListener('click', function (e) {
    const type = confirm_password.getAttribute('type') === 'password' ? 'text' : 'password';
    confirm_password.setAttribute('type', type);
    // toggle the eye slash icon
    
    if(type === "password"){
        confirmTogglePassword.classList.add("ri-eye-off-line");
        confirmTogglePassword.classList.remove("ri-eye-line");
    }
    else{
        confirmTogglePassword.classList.add("ri-eye-line");

        confirmTogglePassword.classList.remove("ri-eye-off-line");

    }
});

// OPEN AND CLOSE EYE FOR PASSWORD CHECKING AT THE SIGN IN TIME 

const SignInTogglePassword = document.querySelector('#SigInTogglePassword');
const SignInpassword = document.querySelector('#signInPassword');
SignInTogglePassword.addEventListener('click', function (e) {
    const type = SignInpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    SignInpassword.setAttribute('type', type);
    // toggle the eye slash icon
    // this.classList.toggle('ri-eye-off-line');
    if(type === "password"){
        SignInTogglePassword.classList.add("ri-eye-off-line");
        SignInTogglePassword.classList.remove("ri-eye-line");
    }
    else{
        SignInTogglePassword.classList.add("ri-eye-line");
        SignInTogglePassword.classList.remove("ri-eye-off-line");
    }
});


// OPEN AND CLOSE EYE FOR PASSWORD CHECKING AT UPDATING YOUR PROFILE


const profile_current_toggle_password = document.querySelector('#profile_current_toggle_password');
const profile_current_password = document.querySelector('#profile_current_password');
profile_current_toggle_password.addEventListener('click', function (e) {
    const type = profile_current_password.getAttribute('type') === 'password' ? 'text' : 'password';
    profile_current_password.setAttribute('type', type);
    // toggle the eye slash icon
    // this.classList.toggle('ri-eye-off-line');

        
    if(type === "password"){
        profile_current_toggle_password.classList.add("ri-eye-off-line");
        profile_current_toggle_password.classList.remove("ri-eye-line");
    }
    else{
        profile_current_toggle_password.classList.add("ri-eye-line");
        profile_current_toggle_password.classList.remove("ri-eye-off-line");
    }

});


const profile_new_toggle_password = document.querySelector('#profile_new_toggle_password');
const profile_new_password = document.querySelector('#profile_new_password');
profile_new_toggle_password.addEventListener('click', function (e) {
    const type = profile_new_password.getAttribute('type') === 'password' ? 'text' : 'password';
    profile_new_password.setAttribute('type', type);
    // toggle the eye slash icon
    if(type === "password"){
        profile_new_toggle_password.classList.add("ri-eye-off-line");
        profile_new_toggle_password.classList.remove("ri-eye-line");
    }
    else{
        profile_new_toggle_password.classList.add("ri-eye-line");
        profile_new_toggle_password.classList.remove("ri-eye-off-line");
    }
});


// user-profile   change hamburger button to close button

function openCloseIcon() {
    document.getElementById("profile-menu").style.display = "block";
    document.getElementById("close-icon").style.display = "block";
    document.getElementById("menu-icon").style.display = "none";
}
function openMenuIcon() {
    document.getElementById("profile-menu").style.display = "none";
    document.getElementById("close-icon").style.display = "none";
    document.getElementById("menu-icon").style.display = "block";
}

// LogOut form the user account
function signOutUser() {
    document.getElementById("profile-menu").style.display = "none";
    document.getElementById("user-profile").style.display = "none";
    document.getElementById("sign-in-sign-up").style.display = "flex";
}


// for OTP beutification
const inputs = document.querySelectorAll(".inputPassword")
const button = document.getElementById("verifyOTPButton");
inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = input
        const nextInput = input.nextElementSibling
        const prevInput = input.previousElementSibling;
        // if the value has more than one character then clear it
        if (currentInput.value.length > 1) {
            currentInput.value = "";
            return;
        }
        if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }
        // if the backspace key is pressed
        if (e.key === "Backspace") {
            inputs.forEach((input, index2) => {
                if (index1 <= index2 && prevInput) {
                    input.setAttribute("disabled", true);
                    input.value = "";
                    prevInput.focus();
                }
            });
        }
        if (!inputs[5].disabled && inputs[5].value !== "") {
            button.classList.add("activeVerifyBtn");
            return;
        }
        button.classList.remove("activeVerifyBtn");
    });
});
window.addEventListener("load", () => inputs[0].focus());


window.onload = () => {
    const position = document.querySelector(".apply_transition");
    position.style.top = "50%";
};


// Opening page according to our navigation bar 

function openHomePage() {
    if (document.getElementById("home").style.display = "none") {
        document.getElementById("home").style.display = "block";
        document.getElementById("why-us").style.display = "none";
        document.getElementById("testimonials").style.display = "none";
        document.getElementById("experts").style.display = "none";
        document.getElementById("contact-us").style.display = "none";
        document.getElementById("book-Interview").style.display = "none";
    }
}

function openWhyUsPage() {
    if (document.getElementById("why-us").style.display = "none"
    ) {
        document.getElementById("home").style.display = "none";
        document.getElementById("why-us").style.display = "block"
        document.getElementById("testimonials").style.display = "none";
        document.getElementById("experts").style.display = "none";
        document.getElementById("contact-us").style.display = "none";
        document.getElementById("book-Interview").style.display = "none";
        document.getElementById("getting-hired-10x").style.display = "block";
    }
}

function openTestimonialsPage() {
    if (
        document.getElementById("testimonials").style.display = "none"
    ) {
        document.getElementById("home").style.display = "none";
        document.getElementById("why-us").style.display = "none"
        document.getElementById("testimonials").style.display = "block"
        document.getElementById("experts").style.display = "none";
        document.getElementById("contact-us").style.display = "none";
        document.getElementById("book-Interview").style.display = "none";
        document.getElementById("getting-hired-10x").style.display = "block";
    }
}

function openExpertsPage() {
    if (
        document.getElementById("experts").style.display = "none"
    ) {
        document.getElementById("home").style.display = "none";
        document.getElementById("why-us").style.display = "none"
        document.getElementById("testimonials").style.display = "none"
        document.getElementById("experts").style.display = "block";
        document.getElementById("contact-us").style.display = "none";
        document.getElementById("book-Interview").style.display = "none";
    }
}

function openContactUsPage() {
    if (
        document.getElementById("contact-us").style.display = "none"
    ) {
        document.getElementById("home").style.display = "none";
        document.getElementById("why-us").style.display = "none"
        document.getElementById("testimonials").style.display = "none"
        document.getElementById("experts").style.display = "none";
        document.getElementById("contact-us").style.display = "block";
        document.getElementById("book-Interview").style.display = "none";
    }
}

function openBookInterviewPage() {
    if (
        document.getElementById("book-Interview").style.display = "none"
    ) {
        document.getElementById("home").style.display = "none";
        document.getElementById("why-us").style.display = "none"
        document.getElementById("testimonials").style.display = "none"
        document.getElementById("experts").style.display = "none";
        document.getElementById("contact-us").style.display = "none";
        document.getElementById("book-Interview").style.display = "block";
        document.getElementById("getting-hired-10x").style.display = "none";
    }
}


function openLoginPage() {
    if (document.getElementById("signin").style.display = "none"
    ) {
        document.getElementById("signin").style.display = "block";
        document.getElementById("signup-get-otp").style.display = "none";
        document.getElementById("signup").style.display = "none";
        document.getElementById("forgot-password").style.display = "none";
        document.getElementById("notification-bar").style.display = "none";
    }
}

function openSignupPage() {
    if (
        document.getElementById("signup").style.display = "none"

    ) {
        document.getElementById("signin").style.display = "none";
        document.getElementById("signup").style.display = "block"
        document.getElementById("signup-get-otp").style.display = "none";
        document.getElementById("forgot-password").style.display = "none";
        document.getElementById("notification-bar").style.display = "none";
    }
}

function signupGetOTP() {
    if (
        document.getElementById("signup-get-otp").style.display = "none"
    ) {

        document.getElementById("signin").style.display = "none";
        document.getElementById("signup").style.display = "none"
        document.getElementById("signup-get-otp").style.display = "block";
        document.getElementById("forgot-password").style.display = "none";
        document.getElementById("notification-bar").style.display = "none";
    }
}

function openNotificationPage() {
    if (
        document.getElementById("notification-bar").style.display = "none"
    ) {
        document.getElementById("signin").style.display = "none";
        document.getElementById("signup").style.display = "none"
        document.getElementById("signup-get-otp").style.display = "none";
        document.getElementById("forgot-password").style.display = "none";
        document.getElementById("notification-bar").style.display = "block";
    }
}

function openForgotPasswordPage() {
    if (
        document.getElementById("forgot-password").style.display = "none"
    ) {
        document.getElementById("signin").style.display = "none";
        document.getElementById("signup").style.display = "none"
        document.getElementById("signup-get-otp").style.display = "none";
        document.getElementById("forgot-password").style.display = "block";
        document.getElementById("notification-bar").style.display = "none";
    }
}

function hideLoginSignupButton() {
    document.getElementById("user-profile").style.display = "flex";
    document.getElementById("menu-icon").style.display = "block"
    document.getElementById("signup-get-otp").style.display = "none";
    document.getElementById("sign-in-sign-up").style.display = "none";
    document.getElementById("signin").style.display = "none";
    document.getElementById("close-icon").style.display = "none";
}


function openEditUserProfilePage(){
    if (
        document.getElementById("edit-user-profile").style.display = "none"
    ) {
        document.getElementById("signin").style.display = "none";
        document.getElementById("signup").style.display = "none"
        document.getElementById("signup-get-otp").style.display = "none";
        document.getElementById("forgot-password").style.display = "none";
        document.getElementById("notification-bar").style.display = "none";
        document.getElementById("edit-user-profile").style.display = "block";
    }
}




function decrementExperience() {
    document.getElementById("incrementExperienceButton").removeAttribute("disabled");
    let currentExperience = parseInt(document.getElementById("select-experience").innerText);
    if (currentExperience <= 0) {
        document.getElementById("decrementExperienceButton").setAttribute("disabled", "");
    } else {
        // for decrementing the total Price
        let total_Prize = document.getElementById("total-price").innerText;
        document.getElementById("total-price").innerText = parseInt(total_Prize) - 50;
        // for decrementing the Expected Price

        let expected_Prize = document.getElementById("expected-price").innerText;
        document.getElementById("expected-price").innerText = parseInt(expected_Prize) - 50;

        currentExperience--;
        document.getElementById("select-experience").innerText = currentExperience;
    }
}
function incrementExperience() {
    // document.getElementById("decrementExperienceButton").setAttribute("disabled", "");
    document.getElementById("decrementExperienceButton").removeAttribute("disabled");
    let currentExperience = parseInt(document.getElementById("select-experience").innerText);
    if (currentExperience >= 10) {
        document.getElementById("incrementExperienceButton").setAttribute("disabled", "");
    } else {
        // for incrementing the total Price

        let total_Prize = document.getElementById("total-price").innerText;
        document.getElementById("total-price").innerText = parseInt(total_Prize) + 50;

        // for incrementing the Expected Price

        let expected_Prize = document.getElementById("expected-price").innerText;
        document.getElementById("expected-price").innerText = parseInt(expected_Prize) + 50;
        currentExperience++;
        document.getElementById("select-experience").innerText = currentExperience;
    }
}

function decrementDuration() {
    document.getElementById("increment-duration-button").removeAttribute("disabled");
    let currentDuration = parseInt(document.getElementById("select-duration").innerText);
    if (currentDuration <= 30) {
        document.getElementById("decrement-duration-button").setAttribute("disabled", "");
    } else {

        let total_Prize = document.getElementById("total-price").innerText;
        document.getElementById("total-price").innerText = parseInt(total_Prize) - 50;
        // for decrementing the Expected Price

        let expected_Prize = document.getElementById("expected-price").innerText;
        document.getElementById("expected-price").innerText = parseInt(expected_Prize) - 50;

        currentDuration -= 15;
        document.getElementById("select-duration").innerText = currentDuration;
    }
}

function incrementDuration() {
    document.getElementById("decrement-duration-button").removeAttribute("disabled");
    let currentDuration = parseInt(document.getElementById("select-duration").innerText);
    if (currentDuration >= 90) {
        document.getElementById("increment-duration-button").setAttribute("disabled", "");
    } else {

        // for incrementing the total Price

        let total_Prize = document.getElementById("total-price").innerText;
        document.getElementById("total-price").innerText = parseInt(total_Prize) + 50;

        // for incrementing the Expected Price

        let expected_Prize = document.getElementById("expected-price").innerText;
        document.getElementById("expected-price").innerText = parseInt(expected_Prize) + 50;

        currentDuration += 15;
        document.getElementById("select-duration").innerText = currentDuration;
    }
}








