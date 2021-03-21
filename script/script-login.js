function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if ((username == "admin") && (password == "admin")) {
        return true;
    } else {
        return false;
    }
}