const elTabBtn = document.querySelectorAll('.menu'),
        elTabCon = document.querySelector('.in-menu01');
        let num = 0;

        for(let i=0; i<elTabBtn.length; i++){  
            elTabBtn[i].addEventListener('mouseover',function(){
                elTabBtn[num].classList.remove('active');
                elTabCon[num].classList.remove('active');
                
                elTabBtn[i].classList.add('active');
                elTabCon[i].classList.add('active');
                num = i;
            });
        };

        