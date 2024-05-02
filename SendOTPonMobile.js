const firebaseConfig = {
    apiKey: "AIzaSyDbc2yrry-ZOOnYw0ykR_4WjtNsOcfHHB8",
    authDomain: "phone-authentication-d0e49.firebaseapp.com",
    projectId: "phone-authentication-d0e49",
    storageBucket: "phone-authentication-d0e49.appspot.com",
    messagingSenderId: "382462994982",
    appId: "1:382462994982:web:1b6935097ee6afb9b494e7"
};

firebase.initializeApp(firebaseConfig);
// render recaptcha verifier
render();
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

// function for send OTP
function phoneAuth() {
    var number = document.getElementById('number').value;
    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        console.log('OTP Sent');
    }).catch(function (error) {
        // error in sending OTP
        alert(error.message);
    });
}
// function for OTP verify
function codeverify() {
    var code = document.getElementById('verificationcode').value;
    coderesult.confirm(code).then(function () {
        console.log('OTP Verified');
    }).catch(function () {
        console.log('OTP Not correct');
    })
}
