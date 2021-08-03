function letsGo(){

    fetch('data/data.json')
    .then( res => res.json() )
    .then( data => callback(data));

    function callback(data){
        // console.log(data);
        let link,img,text,name,detail,price;
        slid1='',slid2='',style1='',design1='';
        let num=4;
        const elSec1 = document.querySelector('.center:nth-of-type(1)');
        const elSec2 = document.querySelector('.center:nth-of-type(2)');
        const elStyle1 = document.querySelector('.a6-sub');
        const elA6 = document.querySelector('.a6');
        const elBtn = document.querySelector('.st5 a');
        const elBtnI = document.querySelector('.st5 a img');
        // const elFig = document.querySelector('.i-1 figure');
       
        
       
        var odd = [];
        var even = [];
        // const elStyle2 = document.querySelector('.a6-sub:nth-of-type(2)');

        for(let i=0; i<data.work1.length; i++ ){

            link = data.work1[i].link;
            img = data.work1[i].img;
            text = data.work1[i].text;

            slid1 += `<div class="slide-1">
                        <a href="${link}"><img src="${img}"></a>
                        <span class="sp1">${text}</span>
                        </div>`;
        }
        for(let i=0; i<data.work2.length; i++ ){

            link = data.work2[i].link;
            img = data.work2[i].img;
            name = data.work2[i].name;
            detail = data.work2[i].detail;
            price = data.work2[i].price;

            slid2 += `<div class="slide-1">
                        <a href="${link}"><img src="${img}"></a>
                        <b class="bbb">${name}</b>
                        <span class="us">
                            <span class="s1">${detail}</span>
                            <span class="s2">${price}</span>
                        </span>
                    </div>`;     
        }
        
        
        function aaa(){
            style1='';
            for(let i=0; i<data.work3.length; i++ ){

                if(i < num){
                    if(i % 2 == 1) {

                        style1 += `<div class="st2">
                                <div class="tx">
                                    <big>${data.work3[i].name}</big><br>
                                    <span>${data.work3[i].detail}</span>
                                </div>
                                <img src="${data.work3[i].img}">
                                </div>
                                `;

                    } else if (i % 2 == 0) {

                        style1 += `<div class="st1">
                                <div class="tx">
                                <img src="${data.work3[i].img}">
                                    <big>${data.work3[i].name}</big><br>
                                    <span>${data.work3[i].detail}</span>
                                </div>                       
                                </div>`;
                    }
                }
            }
            elStyle1.innerHTML = style1;
                
            

        }

        aaa();

        elBtn.addEventListener('click',function(){
            if(num == 4){
                num *=2;
            }else if(num == 8){
                num *=2;
                elBtnI.style.transform = "rotateZ(180deg)";
            }else{
                num /= 4;
                elBtnI.style.transform = "rotateZ(0deg)";
            }
            aaa();
            const mov3Img = document.querySelectorAll('.a6-sub > div');
            for(let i=0; i < mov3Img.length; i++){
                    mov3Img[i].classList.add('active');
                }
        });

        for(let i=0; i<data.work4.length; i++ ){
            link = data.work4[i].link;
            img1 = data.work4[i].img;
            img2 = data.work4[i].img;
            name = data.work4[i].name;
            detail = data.work4[i].detail;
            price = data.work4[i].price;

            design1 += `<div>
            <a class="n-1" href="${link}">
                <img src="${img1}" class="n-a">
                <img src="${img2}" class="n-b">
                <b>${name}</b>
                <span class="us">
                    <span class="s1">${detail}</span>
                    <span class="s2">${price}</span>
                </span>
            </a>
        </div>`;
        }
        
      
        elSec1.innerHTML = slid1;      
        elSec2.innerHTML = slid2;
        
        // elFig.innerHTML = design1;
       
     


        $('.center').slick({
            arrows:true,
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay:true,
            autoplaySpeed:2000,
            
        });

        const mov1Text = document.querySelectorAll('.a2 span');
        const mov1Img = document.querySelector('.a2 img');
        const mov2Text = document.querySelectorAll('.a4 span');
        const mov3Img = document.querySelectorAll('.a6-sub > div');
        const mov2Img = document.querySelector('.a4 img');

        

        

        let elHeight;
        let winHei = window.innerHeight;


        window.addEventListener('scroll',function(){
            //----------ani-1-------------------------------
            for(let i=0; i<mov1Text.length; i++){
                elHeight = mov1Text[i].offsetTop;

                if(elHeight-winHei <= window.scrollY-1000){
                    mov1Text[i].classList.add('active');
                }
            }
            
            elHeight = mov1Img.offsetTop;

            if(elHeight-winHei <= window.scrollY-1000){
                mov1Img.classList.add('active');
            }
            //----------ani-2-------------------------------
            for(let i=0; i<mov2Text.length; i++){
                elHeight = mov2Text[i].offsetTop;

                if(elHeight-winHei <= window.scrollY - 2000){
                    mov2Text[i].classList.add('active');
                }
            }
            
            elHeight = mov2Img.offsetTop;

            if(elHeight-winHei <= window.scrollY-2500){
                mov2Img.classList.add('active');
            }

            //----------ani-3-------------------------------
            
            for(let i=0; i < mov3Img.length; i++){
                elHeight = mov3Img[i].offsetTop;

                if(elHeight-winHei <= window.scrollY){
                    mov3Img[i].classList.add('active');
                }
            }
            
            
        });
        


    }
};
window.onload = letsGo;

//window.addEventListener('load',init);
//window.addEventListener('load',function(){ });


    
