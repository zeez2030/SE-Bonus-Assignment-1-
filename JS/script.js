let submit = document.getElementById('submit');


const validate = function (title, sub, name, pub, year) {
    if (title != "" && sub != "" && name != "" && pub != "" &&
        (year > 0 && year < 2020)) {
        return true;
    } else
        return false;

};
submit.addEventListener('click', function (e) {
        
    
    let title = document.getElementById("title").value;
    let sub = document.getElementById("sub").value;
    let name = document.getElementById("auth").value;
    let pub = document.getElementById("pub").value;
    let year = document.getElementById("year").value;
    let color = document.getElementById("color").value;
    if (validate(title, sub, name, pub, year)) {

       let firstpage= document.querySelector('.firstpage');
        firstpage.style.visibility='hidden';
       let body= document.querySelector('body');
        body.style.background=color;
    } else
        alert("check inputs");

})
