function validateSignUpForm() {
    // Get form values
    var firstname = document.getElementById("fname").value.trim();
    var lastname = document.getElementById("lname").value.trim();
    var email = document.getElementById("email").value.trim();
    var username = document.getElementById("Usernm").value.trim();
    var password = document.getElementById("pwd").value.trim();
    var confirm_pwd = document.getElementById("confirm-pwd").value.trim();
    var phoneNumber = document.getElementById("phoneNumber").value.trim();
    var address = document.getElementById("address").value.trim();
    var agree = document.querySelector('input[name="agree"]').checked;

    // Clear previous error messages
    document.getElementById("fnameError").innerHTML = "";
    document.getElementById("lnameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("UserNameError").innerHTML = "";
    document.getElementById("pwdError").innerHTML = "";
    document.getElementById("confirm_pwdError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("addressError").innerHTML = "";
    document.getElementById("agreeError").innerHTML = "";

    var isValid = true;

    // Validate required fields
    if (firstname === "" ) {
        document.getElementById("fnameError").innerHTML = "First Name is required";
        isValid = false;
    }
    if (lastname === "") {
        document.getElementById("lnameError").innerHTML = "Last Name is required";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
    }
    if (username === "") {
        document.getElementById("UserNameError").innerHTML = "Username is required";
        isValid = false;
    }
    if (password === "") {
        document.getElementById("pwdError").innerHTML = "Password is required";
        isValid = false;
    }
    if (confirm_pwd === "") {
        document.getElementById("confirm_pwdError").innerHTML = "Confirm Password is required";
        isValid = false;
    }
    if (phoneNumber === "") {
        document.getElementById("phoneError").innerHTML = "Phone number is required";
        isValid = false;
    }
    if (address === "") {
        document.getElementById("addressError").innerHTML = "Address is required";
        isValid = false;
    }

    // Validate email format
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address";
        isValid = false;
    }

    // Validate phone number format
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        document.getElementById("phoneError").innerHTML = "Please enter a valid 10-digit phone number";
        isValid = false;
    }


    // Validate password match
    if (password !== confirm_pwd) {
        document.getElementById("confirm_pwdError").innerHTML = "Passwords do not match";
        isValid = false;
    }

    // Validate agreement to terms
    if (!agree) {
        document.getElementById("agreeError").innerHTML = "You must agree to the terms and conditions";
        isValid = false;
    }
   
            if (isValid) {
                // Show success message
                storeUserData();
                alert("Form submitted successfully!");
                return true;
            } 

    return isValid;
}

function storeUserData() {
    //create object to store data
    var SignupData = {
        firstName: document.getElementById("fname").value.trim(),
        lastName: document.getElementById("lname").value.trim(),
        email: document.getElementById("email").value.trim(),
        username: document.getElementById("Usernm").value.trim(),
        password: document.getElementById("pwd").value.trim(),
        phoneNumber: document.getElementById("phoneNumber").value.trim(),
        address: document.getElementById("address").value.trim()
    };

    // Store userData in localStorage
    localStorage.setItem('SignupData', JSON.stringify(SignupData));
}

function validateLoginForm()
{
    var usernlogin=document.getElementById("Username").value.trim();
    var Emaillogin=document.getElementById("Email").value.trim();
    var password=document.getElementById("password").value.trim();

     // Retrieve  from localStorage
     var storedData = JSON.parse(localStorage.getItem('SignupData'));

     // Check if storedData exists and credentials match
     if (storedData) {
         if ((usernlogin === storedData.username || Emaillogin === storedData.email) && password === storedData.password) {
             alert("Login Successful!");
            //  window.location.href = "index.html";
             return true; 
         } else {
             alert("Invalid credentials. Please try again.");
             return false; 
         }
     } else {
         alert("No signup data found. Please sign up first.");
         return false; 
     }
}

function submitinfo(){
    window.location.href = "index.html";
}