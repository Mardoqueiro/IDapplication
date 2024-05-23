let idNumber = document.getElementById("idNumber");
let output = document.getElementById("output");
let submitButton = document.getElementById("submit");
let clearButton = document.getElementById("clear");


submitButton.addEventListener("click", handleSubmit);

function handleSubmit() {
    if (idNumber && idNumber.value && idNumber.value.length === 13 && !isNaN(idNumber.value)) {
        let date = idNumber.value.slice(0, 6);
        let year = date.slice(0, 2);
        let month = date.slice(2, 4);
        let day = date.slice(4, 6);
        let gender = idNumber.value.slice(6, 7);

        if (gender >= '0000' && gender <= '4999') {
            gender = "Female";
        } 
        else if (gender >= '5000' && gender <= '9999') {
            gender = "Male";
        }
        else {
            gender = "Female";
        }
        output.textContent = `Date of Birth: ${day}/${month}/${year}\nGender: ${gender}`;   
    } else {
        output.textContent = "Invalid ID number";
    }
    idNumber.value = "";
}
clearButton.addEventListener("click", handleClear);

function handleClear() {
    if (idNumber) {
        idNumber.value = "";
        output.textContent = "";
        idNumber.focus();
    }
}   
