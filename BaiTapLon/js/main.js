function validateRegister() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return false;
    }

    let user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Đăng ký thành công!");
    return true;
}