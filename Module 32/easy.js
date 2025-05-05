var nameInput = document.getElementById("name");
var errorMessage = document.getElementById("error");
var form = document.getElementById("nameForm");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var nameValue = nameInput.value;

    if(/[^a-zA-Z]/.test(nameValue)){
        errorMessage.style.display='inline';
    }else{
        errorMessage.style.display='none';
        alert('Forma u dergua me sukses');
    }
});