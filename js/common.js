$(function(){
    $('header').load('inc.html header > div', function(){
        const elBtn = document.querySelectorAll('.menu .in a div');
        let num = 0;

        for(let i=0; i<elBtn.length; i++){
            elBtn[i].addEventListener('click',function(){
            elBtn[num].classList.remove('active');
            elBtn[i].classList.add('active');
            num = i;
        })    
    
}
        const elTabCon = document.querySelector('.in-menu01');
        const elCon = document.querySelector('.con1');
        let aaa = 0;

        for(let i=0; i<elBtn.length; i++){  
            elBtn[i].addEventListener('mouseover',function(){
                elBtn[aaa].classList.remove('active');
                elTabCon.classList.remove('active');
                
                elBtn[i].classList.add('active');
                elTabCon.classList.add('active');
                aaa = i;
            });
            elTabCon.addEventListener('mouseleave',function(){
                // elBtn[aaa].classList.remove('active');
                elTabCon.classList.remove('active');
                elBtn[aaa].classList.remove('active');
                aaa = i;
            })
        };

        const elHeader = document.querySelector("header");
        const elAside = document.querySelector("aside");

               window.addEventListener("scroll", () => {

            
            let domHei = document.documentElement.offsetHeight;
            let winHei = window.innerHeight;

            console.log(domHei); 
            console.log(winHei); 
            console.log(domHei - winHei); 
            
            if(domHei - winHei <= window.scrollY){ 
                console.log("문서 최하단 위치");
            }
            if(winHei < window.scrollY){ 
                elAside.classList.add("active");
               
            }else{
                elAside.classList.remove("active");
            }
            
        });
        
        const elMenu = document.querySelectorAll('.menu-1 a');
        const elErow = document.querySelector('.con1');

        console.log(menuWidth);
    })

    $('footer').load('inc.html footer > .ft')
});





