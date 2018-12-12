let submit = document.getElementById('submit');


const validate = function (title, sub, name, pub, year) {
    if (title != "" && sub != "" && name != "" && pub != "" &&
        (year > 0 && year < 2020)) {
        return true;
    } else
        return false;

};
 let secondpage = document.querySelector('.secondpage');
    secondpage.style.visibility="hidden";
submit.addEventListener('click', function (e) {
        
    
    let title = document.getElementById("title").value;
    let sub = document.getElementById("sub").value;
    let name = document.getElementById("auth").value;
    let pub = document.getElementById("pub").value;
    let year = document.getElementById("year").value;
    let color = document.getElementById("color").value;
    if (validate(title, sub, name, pub, year)) {

       let firstpage= document.querySelector('.firstpage');
        firstpage.innerHTML=" ";
        
       let body= document.querySelector('body');
        secondpage.style.background=color;
        body.style.background='#ddd'
        let titleh = document.querySelector('.title');
        let publisher= document.querySelector('.publisher');
        
        publisher.textContent=pub;
        
        let y= document.querySelector('.year');
        y.textContent=year;
        let subtitle= document.querySelector('.subtitle');
       secondpage.style.visibility="visible"; 
        titleh.textContent=title;
        subtitle.textContent=sub;
        let author = document.querySelector('.author p');
        author.textContent=name;
    } else
        alert("check inputs");

})
