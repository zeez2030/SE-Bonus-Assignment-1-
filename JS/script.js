let submit = document.getElementById('submit');


const validate = function (title, sub, name, pub, year) {
    if (title != "" && sub != "" && name != "" && pub != "" &&
        (year > 0 && year < 2020)) {
        return true;
    } else
        return false;

};
let x = 0;
let submit2 = document.getElementById('zeez');
submit2.addEventListener('click', function () {
    let h1 = document.createElement('h1');
    h1.textContent = "zeez";
    document.getElementById('body').appendChild(h1)
    if (x % 2 == 0)
        document.getElementById('body').style.backgroundColor = 'white'
    else            document.getElementById('body').style.backgroundColor = 'red'
})
submit.addEventListener('click', function () {

    let title = document.getElementById("title").value;
    let sub = document.getElementById("sub").value;
    let name = document.getElementById("auth").value;
    let pub = document.getElementById("pub").value;
    let year = document.getElementById("year").value;
    let color = document.getElementById("color").value;
    if (validate(title, sub, name, pub, year)) {

        window.location.href = ('./design.html');
        document.getElementById("body").style.backgroundColor = color;
    } else
        alert("check inputs");

})
