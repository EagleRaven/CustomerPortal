console.log("Test")

// Welcome Back Header
const welcomeBack = document.getElementById("ctl00_ContentPlaceHolder1_lblWelcomeText"); 
welcomeBack.innerHTML = "Welcome back to Eagle Raven Global! Let's get your shipment taken care of.";


// Sign in Button
const signInbtn = document.getElementById("ctl00_ContentPlaceHolder1_cmdLogin");
signInbtn.value = "Sign In";

// Create Account Button
const createAccountbtn = document.getElementById("ctl00_ContentPlaceHolder1_btnCreateAccount");
createAccountbtn.value = "Create Account";


// Sign in Fields
const signInField = document.getElementById("ctl00_ContentPlaceHolder1_UserName");
const passwordField = document.getElementById("ctl00_ContentPlaceHolder1_Password");
signInField.placeholder = "Username";
passwordField.placeholder = "Password";
































