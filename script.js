
document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Get input values
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");


    errorMessage.textContent = "";


    if (!email.includes("@")) {
        errorMessage.textContent = "❌ Please enter a valid email address.";
        event.preventDefault();
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "❌ Password must be at least 6 characters.";
        event.preventDefault();
        return;
    }


});
