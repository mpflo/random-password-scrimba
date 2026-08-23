let generatePassword = document.getElementById("generate-password")
let passwordLength = 15
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let numbersOption = document.getElementById("numbers")
let symbolsOption = document.getElementById("symbols")

const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let characters = []

function choosingPassword() {
    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }

    return password
}

function generatePasswords() {       
    characters = []
    
    if (!numbersOption.checked && !symbolsOption.checked) {
        characters.push(...letters)
    } else if (!numbersOption.checked && symbolsOption.checked) {
        characters.push(...symbols, ...letters)
    } else if (numbersOption.checked && !symbolsOption.checked) {
        characters.push(...numbers, ...letters)
    } else {
        characters.push(...letters, ...numbers, ...symbols)
    }

    passwordOne.value = choosingPassword()
    passwordTwo.value = choosingPassword()
}
generatePassword.addEventListener("click", generatePasswords)


