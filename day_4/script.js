const passwordBox = document.getElementById("Password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]></-=";

const allchars = [upperCase, lowerCase, number, symbols]
function createPassword(){
    let password = "";
    for (let index = 0; index < length; index++) {
        let typeOfChar = Math.floor(Math.random() *4);
        password += allchars[typeOfChar][Math.floor(Math.random() * allchars[typeOfChar].length)];
        
    }
    passwordBox.value = password;

}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
