function validasiForgotPassword() {
    var username = document.getElementById("username").value;
    if (username == "admin") {
        alert("Silahkan cek inbox di surel untuk mereset password anda");
        return false;
    } else {
        alert("Username tidak terdaftar");
    }
}