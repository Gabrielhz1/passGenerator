const sliderElement = document.querySelector("#slider")
const buttonElement = document.getElementById("button")
const sizePassword = document.getElementById("valor")
const password = document.getElementById("password")


let containerPassword = document.getElementById("container-password")

let charset = "abcdefghijklmnopqrstuvyxyzABCDEFGHIJKLMNOPQRSTUVYXYZ!@"

let novaSenha = ""

sizePassword.innerHTML = sliderElement.value

slider.oninput = function() {
    sizePassword.innerHTML = this.value
}

 function generatePassword() {
    let pass = "";
    for(let i  = 1, n = charset.length;i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove("hide")
    password.innerHTML = pass
    novaSenha = pass;
    console.log(novaSenha)
 }



 function changeColor() {
    const btnLight = document.body
    const containerPass = document.querySelector(".container-password")
    btnLight.classList.toggle("light")
    
  
 }

