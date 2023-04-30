let MyForm = document.querySelector("form")
let NameInput = document.querySelector("#name")
let EmailInput = document.querySelector("#email")

MyForm.addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault();

    let NameValue = NameInput.value;
    let EmailValue = EmailInput.value;

    if(NameValue && EmailValue) {
        alert(`Name: ${NameValue}\nEmail: ${EmailValue}`);
    } else {

        if(!NameValue) {
            document.getElementById("name").placeholder = "Ви не ввели ім'я, будь ласка, введіть ім'я";
            document.getElementById("name").classList.add("color");
        }

        if(!EmailValue) {
            document.getElementById("email").placeholder = "Ви не ввели email, будь ласка, введіть email"
            document.getElementById("email").classList.add("color")
        }
    }
}
          
 


