$(function(){
    $('header').load('inc.html header > div', function(){

        const listBtn = document.querySelectorAll('.list li');
        const listBtn2 = document.querySelectorAll('.list2 li');
    
        listBtn.forEach(function(a,i,t){
            a.addEventListener('click',function(){  
                localStorage.pageName = i;  
            })
        })
        listBtn2.forEach(function(b,t){
            b.addEventListener('click',function(){  
                localStorage.pageName2 = t;  
            })
        })
        
        
    
        

        const elBtn = document.querySelectorAll('.menu .in a div');
        const elErrow = document.querySelector('.con1');
        let num = 0;

        for(let i=0; i<elBtn.length; i++){
            elBtn[i].addEventListener('click',function(){
            elBtn[num].classList.remove('active');
            elBtn[i].classList.add('active');
            num = i;
        })    
    
}
        const elTabCon = document.querySelector('.in-menu01');
        const elCon = document.querySelectorAll('.con-menu');
        let aaa = 0;

        for(let i=0; i<elBtn.length; i++){  
            elBtn[i].addEventListener('mouseover',function(){
                elBtn[aaa].classList.remove('active');
                elTabCon.classList.remove('active');
                elCon[aaa].classList.remove('active');
                
                elBtn[i].classList.add('active');
                elTabCon.classList.add('active');
                elCon[i].classList.add('active');
                aaa = i;
            });
            elTabCon.addEventListener('mouseleave',function(){
                // elBtn[aaa].classList.remove('active');
                elTabCon.classList.remove('active');
                elBtn[aaa].classList.remove('active');
                elCon[aaa].classList.remove('active');
                aaa = i;
            })
        };

        const elHeader = document.querySelector("header");
        const elAside = document.querySelector("aside");

            window.addEventListener("scroll", () => {

            
            let domHei = document.documentElement.offsetHeight;
            let winHei = window.innerHeight;
            
            if(domHei - winHei <= window.scrollY){ 
            }
            if(winHei < window.scrollY){ 
                elAside.classList.add("active");
            
            }else{
                elAside.classList.remove("active");
            }
            
        });

        const elSp1 = document.querySelector('.sp1');
        const elSp2 = document.querySelector('.sp2');
        const elSp3 = document.querySelector('.sp3');
        const elErow = document.querySelector('.con1');

        const sp1Left = elSp1.offsetLeft;
        const sp2Left = elSp2.offsetLeft;
        const sp3Left = elSp3.offsetLeft;
        const sp1Width = elSp1.offsetWidth/3;
        const sp2Width = elSp2.offsetWidth/2.5;
        const sp3Width = elSp3.offsetWidth/3;
        
        elSp1.addEventListener('mouseover',function(){
            elErow.style.transform = `translateX(${sp1Width}px)`;
            elErow.style.transition = '.5s';
        })
        elSp2.addEventListener('mouseover',function(){
            elErow.style.transform = `translateX(${sp2Left-sp1Left+sp2Width}px)`;
        })
        elSp3.addEventListener('mouseover',function(){
            elErow.style.transform = `translateX(${sp3Left-sp1Left+sp3Width}px)`;
        })
        
        
    })

    $('footer').load('inc.html footer > .ft')
});





