const form = document.querySelector("form"),
fileInput = form.querySelector(".file-input");
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", ()=>{
    fileInput.click();
});

fileInput.onchange = ({target}) =>{
    let file = target.files[0]; // getting file and [0] this means if user has selcted multples files then get first on only
    if(file){
        let fileName = file.name;
        uploadFile(fileName);
    }
}

function uploadFile(name){
    let xhr = new XMLHttpRequest; // creating new XML obj (AJAX)
    xhr.open("POST", );
    xhr.send();
}