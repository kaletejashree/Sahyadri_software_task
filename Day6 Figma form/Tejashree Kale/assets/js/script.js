function validateForm() {
    var fullname = document.getElementById("fullname").value.trim();
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var agree = document.querySelector('input[name="agree"]').checked;

   

    // Clear previous error messages
    document.getElementById("fnameError").innerHTML = "";
    document.getElementById("usernameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("myCheckboxError").innerHTML = "";

    var isValid = true;

    // Name validation
    if (fullname === "") {
        document.getElementById("fnameError").innerHTML = "Please enter your name.";
        isValid = false;
    }

    // Username validation
    if (username === "") {
        document.getElementById("usernameError").innerHTML = "Please enter a username.";
        isValid = false;
    }

    // Email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
        isValid = false;
    }

    // Password validation (add complexity requirements here)
    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Please enter a password.";
        isValid = false;
    }
    var passpattern=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/;
    if (!passpattern.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password must contain at least 6 characters.";
        isValid = false;
    }

    // Agreement validation
    if (!agree) {
        document.getElementById("myCheckboxError").innerHTML = "You must agree to the terms and conditions.";
        isValid = false;
    }
    if(isValid)
        {
            alert("Form submitted successfully!");
          
        } else {
            alert("Please fill all fields.");
        }
    return isValid;
}

