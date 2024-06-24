function validateLogin() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    
    if (username === "") {
        alert("Username or Email is required.");
        return false;
    }
    if (password === "") {
        alert("Password is required.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
    
    // If all validations pass, allow form submission
    return true;
}

function validateRegister() {
    var firstname = document.getElementById("registerFirstname").value;
    var lastname = document.getElementById("registerLastname").value;
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;

    if (firstname === "") {
        alert("Firstname is required.");
        return false;
    }
    if (lastname === "") {
        alert("Lastname is required.");
        return false;
    }
    if (email === "") {
        alert("Email is required.");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (password === "") {
        alert("Password is required.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // If all validations pass, allow form submission
    return true;
}

function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

   function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }
 


    var a = document.getElementById("loginBtn");
    var b = document.getElementById("registerBtn");
    var x = document.getElementById("login");
    var y = document.getElementById("register");

    function login() {
        x.style.left = "4px";
        y.style.right = "-520px";
        a.className += " white-btn";
        b.className = "btn";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }

    function register() {
        x.style.left = "-510px";
        y.style.right = "5px";
        a.className = "btn";
        b.className += " white-btn";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }

