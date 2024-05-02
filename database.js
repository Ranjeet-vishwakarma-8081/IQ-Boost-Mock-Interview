import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSetting = {
    databaseURL: "https://iq-boost-mock-interview-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSetting);
const database = getDatabase(app);

const SignUpData = ref(database, "signUpData");

const SignUpDataFname = ref(database, "signUpData/Fname");
const SignUpDataLname = ref(database, "signUpData/Lname");
const SignUpDataEmail = ref(database, "signUpData/Email");
const SignUpDataPassword = ref(database, "signUpData/Password");
const SignUpDataMobileNo = ref(database, "signUpData/MobileNo");

// const SignUpDataFname = ref(SignUpData, "Fname");
// const SignUpDataLname = ref(SignUpData, "Lname");
// const SignUpDataEmail = ref(SignUpData, "Email");
// const SignUpDataPassword = ref(SignUpData, "Password");
// const SignUpDataMobileNo = ref(SignUpData, "MobileNo");

// Adding SignUp Data into Database

const StoreSignUpData = document.getElementById("StoreSignUpData");
StoreSignUpData.addEventListener("click", async function () {
    const fname = document.getElementById("firstName").value;
    const lname = document.getElementById("lastName").value;
    const email = document.getElementById("emailAddress").value;
    const createPassword = document.getElementById("create_password").value;
    const password = document.getElementById("confirm_password").value;
    const mobileNum = document.getElementById("number").value;

    var i = 0
    while (i < 5) {
        if (fname !== "" && lname !== "" && email !== "" && password !== "") {
            if (createPassword === password && createPassword >=8) {
                if (mobileNum.length == 13) {
                    document.getElementById("error_during_sign_up").style.display = "none";
                    document.getElementById("invalid_mobile_number").style.display = "none";
                    document.getElementById("error_during_password_matching").style.display = "none";
                    push(SignUpDataFname, fname);

                    push(SignUpDataLname, lname);
                    push(SignUpDataEmail, email);
                    push(SignUpDataPassword, password);
                    push(SignUpDataMobileNo, mobileNum);
                    if (
                        document.getElementById("signup-get-otp").style.display = "none"
                    ) {
                        document.getElementById("signin").style.display = "none";
                        document.getElementById("signup").style.display = "none"
                        document.getElementById("signup-get-otp").style.display = "block";
                        document.getElementById("forgot-password").style.display = "none";
                        document.getElementById("notification-bar").style.display = "none";
                    }
                    // below code for sending OTP
                    await firebase.auth().signInWithPhoneNumber(mobileNum, window.recaptchaVerifier).then(function (confirmationResult) {
                        window.confirmationResult = confirmationResult;
                        // coderesult = confirmationResult;
                        console.log('OTP Sent');
                    }).catch(function (error) {
                        // error in sending OTP
                        alert(error.message);
                    });
                    console.log("The data is added successfully");

                    i = 6;
                } else {
                    document.getElementById("error_during_sign_up").style.display = "none";
                    document.getElementById("invalid_mobile_number").style.display = "block";
                    document.getElementById("error_during_password_matching").style.display = "none";
                }
            } else {
                document.getElementById("error_during_sign_up").style.display = "none";
                document.getElementById("invalid_mobile_number").style.display = "none";
                document.getElementById("error_during_password_matching").style.display = "block";
            }
        }
        else {
            document.getElementById("invalid_mobile_number").style.display = "none";
            document.getElementById("error_during_sign_up").style.display = "block";
            document.getElementById("error_during_password_matching").style.display = "none";
        }
        i++;
    }
})

// Below code for sending OTP on your Mobile number

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
async function render() {
    window.recaptchaVerifier = await new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

// function for OTP verify
const verifyOTPButtonEl = document.getElementById("verifyOTPButton");
verifyOTPButtonEl.addEventListener("click", function () {
    var pwd1 = document.getElementById('first-digit-password').value;
    var pwd2 = document.getElementById('second-digit-password').value;
    var pwd3 = document.getElementById('third-digit-password').value;
    var pwd4 = document.getElementById('fourth-digit-password').value;
    var pwd5 = document.getElementById('fifth-digit-password').value;
    var pwd6 = document.getElementById('six-digit-password').value;
    var code = pwd1 + pwd2 + pwd3 + pwd4 + pwd5 + pwd6;
    // coderesult = confirmationResult;
    confirmationResult.confirm(code).then(function () {
        console.log('OTP Verified');
    }).catch(function () {
        document.getElementById("otp_invalid").style.display = "block";
        console.log('OTP Not correct');
    })
    document.getElementById("user-profile").style.display = "flex";
    document.getElementById("menu-icon").style.display = "block";
    document.getElementById("signup-get-otp").style.display = "none";
    document.getElementById("sign-in-sign-up").style.display = "none";
    document.getElementById("signin").style.display = "none";
    document.getElementById("close-icon").style.display = "none";
})

onValue(SignUpData, function (SignUpDatafromDatabse) {
    if (SignUpDatafromDatabse.exists()) {
        var indexOfEmailData;
        var indexOfFnameData;
        var indexOfLnameData;
        var indexOfPasswordData;
        var indexOfMobileData;

        let SignUpDataArray = Object.entries(SignUpDatafromDatabse.val());

        // console.log("Array of All Sign up data : ", SignUpDataArray);
        // console.log("Array of first Sign up data : ", SignUpDataArray[2][1]);

        // for getting the last Email Address from database
        const newArrayofEmail = Object.values(SignUpDataArray[0][1]);
        const lastEmailAddress = newArrayofEmail[newArrayofEmail.length - 1];
        // console.log(lastEmailAddress);
        // index of Email data
        indexOfEmailData = newArrayofEmail.length - 1;
        // console.log("The index value of the this email address is : ", indexOfEmailData);

        document.getElementById("changeEmailText").innerText = lastEmailAddress;

        // for getting the last Fname and Lname from database
        const newArrayofFname = Object.values(SignUpDataArray[1][1]);
        const lastFname = newArrayofFname[newArrayofFname.length - 1];
        // console.log(lastFname);

        const newArrayofLname = Object.values(SignUpDataArray[2][1]);
        const lastLname = newArrayofLname[newArrayofLname.length - 1];
        // console.log(lastLname);

        // Index of Fname And Lname data
        indexOfFnameData = newArrayofFname.length - 1;
        // console.log("The index value of the this Fname is : ", indexOfFnameData);

        indexOfLnameData = newArrayofLname.length - 1;
        // console.log("The index value of the this Lname is : ", indexOfLnameData);
        document.getElementById("changeFnameText").innerText = lastFname + " " + lastLname;

        // Index of Mobilenumber and Password data

        const newArrayofMobile = Object.values(SignUpDataArray[3][1]);
        const lastMobileNo = newArrayofMobile[newArrayofMobile.length - 1];
        // console.log(lastMobileNo);
        indexOfMobileData = newArrayofMobile.length - 1;
        // console.log("The index value of the this Mobile number is : ", indexOfMobileData);

        const newArrayofPassword = Object.values(SignUpDataArray[4][1]);
        const lastPassword = newArrayofPassword[newArrayofPassword.length - 1];
        // console.log(newArrayofPassword);
        indexOfPasswordData = newArrayofPassword.length - 1;
        // console.log("The index value of the this Password is : ", indexOfPasswordData);

        // below code for SignIn Page

        const hideLoginSignupButtonEl = document.getElementById("hideLoginSignupButton");
        hideLoginSignupButtonEl.addEventListener("click", function () {
            const SignInMail = document.getElementById("sign-in-email").value;
            const SignInPassword = document.getElementById("signInPassword").value;
            console.log(SignInMail + " " + SignInPassword);
            console.log(newArrayofEmail.length);
            for(let i=0;i<newArrayofEmail.length;i++){
                if(SignInMail == newArrayofEmail[i] && SignInPassword == newArrayofPassword[i]){
                    console.log("Email already Exists");
                }
                else{
                    document.getElementById("Invalid_mail_or_password").style.display = "block";
                }
            }
        })
        for (let i = 0; i < SignUpDataArray.length; i++) {
            let SignUpDataList = SignUpDataArray[i];
            // console.log(SignUpDataList);
            // addElemToDom(currentShoppingList);
        }
    } else {
        console.log("Alert! There is no Data in your Database");
    }
})

console.log("last line Executed successfully");