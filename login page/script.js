document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const errorText = document.getElementById("error");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username === "" || password === "") {
            errorText.textContent = "Username and password are required.";
        } else {
            // Send the data to the server for authentication
            // You should use AJAX or fetch to send the data to the server
        }
    });
});
