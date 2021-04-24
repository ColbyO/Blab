function logIn() {
    let usernameLogIn = document.getElementById("username").value;
    let passwordLogIn = document.getElementById("password").value;

    if (usernameLogIn != JSON.parse(localStorage.getItem("createdUsername"))) {
        alert("Username or Password is not registered.")
    } else if (passwordLogIn != JSON.parse(localStorage.getItem("createdPassword"))) {
        alert("Username or Password is not registered.")
    } else {
        let profileName = JSON.parse(localStorage.getItem("createdName"))
        localStorage.setItem("profileUsername", profileName)
        window.location.href = "../Feed Page/feed.html";
    }
}
