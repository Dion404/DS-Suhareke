var nameInput = document.getElementById("name");
var errorMessage = document.getElementById("error");
var errorMessage = document.getElementById("error2");
var form = document.getElementById("nameForm");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var nameValue = nameInput.value;

    if(/[^a-zA-Z]/.test(nameValue)){
        errorMessage.style.display='inline';
    }else{
        errorMessage.style.display='none';
        alert('Form sent successfully');
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var nameValue = nameInput.value;

    if(/[^0-9]/.test(nameValue)){
        errorMessage.style.display='inline';
    }else{
        errorMessage.style.display='none';
        alert('Form sent successfully');
    }
});

