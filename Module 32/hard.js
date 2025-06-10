document.getElementById("myForm").addEventListener("submit", function(e){
    let valid = true;
    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);

    const nameError = document.getElementById("nameError");
    const ageError = document.getElementById("ageError");
    nameError.textContent = "";
    ageError.textContent = "";

    if(name.length<2){
        nameError.textContent = "Name must be atleast 2 characters.";
        valid = false;
    }
    if(isNaN(age) || age <0 || age>120){
        ageError.textContent ="Age must be between 0-120.";
        valid = false;
    }
    if(!valid){
        e.preventDefault();

}});