
const elMenu = document.querySelectorAll('.t-2 a span');
let aaa = 0;
    for(let i=0; i<elMenu.length; i++){
        elMenu[i].addEventListener('click',function(){
            elMenu[aaa].classList.remove('active');
            aaa = i;
            elMenu[i].classList.add('active');
        });              
    };

const elBot = document.querySelectorAll('.bot a');
let bbb = 0;
    for(let i=0; i<elBot.length; i++){
        elBot[i].addEventListener('click',function(){
            elBot[bbb].classList.remove('active');
            bbb = i;
            elBot[i].classList.add('active');
        });
    };