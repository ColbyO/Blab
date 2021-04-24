function onClicked() {

    if (document.getElementById('male').checked) {
        document.getElementById('otherGenderChecked').disabled = true;
        let userGender = "Male"
    }
    if (document.getElementById('female').checked) {
        document.getElementById('otherGenderChecked').disabled = true;
        let userGender = "Female" 
        
        }
    if (document.getElementById('other').checked) {
        document.getElementById('otherGenderChecked').disabled = false;
        let userGender = document.getElementById('otherGenderChecked').value;
        
        }}

function createAccount() {
    let userFirstName = document.getElementById('firstName').value;
    let userLastName = document.getElementById('lastName').value;
    let userEmail = document.getElementById('eMail').value;
    let userPassword = document.getElementById('passWord').value;
    let userConfirmPass = document.getElementById('confirmPassword').value; 
    if (userPassword === userConfirmPass) {
        // nothing
    } else {
        alert("Passwords don't match, please try again.")
    }
    
    let userBirthDate = document.getElementById('birthdate').value; 

    let checkEmptyBoxes = document.forms["form1"]["Check"].value;
    if (checkEmptyBoxes == "") {
        alert("Please enter in every box.")
    } else if (document.getElementById('eMail').value === JSON.parse(localStorage.getItem("createdUsername")) ) { 
        alert("This email is already associated with an account.") 
    } else {
        let usersInfo = {
            "name": [],
            "email": [],
            "password": []
        }

        usersInfo["email"].push(userEmail)
        usersInfo["password"].push(userPassword)
        usersInfo["name"].push(userFirstName + " " + userLastName)

        localStorage.setItem("createdUsername", JSON.stringify(usersInfo["email"]))
        localStorage.setItem("createdPassword", JSON.stringify(usersInfo["password"]))
        localStorage.setItem("createdName", JSON.stringify(usersInfo["name"]))

        window.location.href = "../Sign In/index.html"; 
    }
}
