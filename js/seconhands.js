function letsGo(){

    fetch('../data/data.json')
    .then( res => res.json() )
    .then( data => callback(data));

    function callback(data){

        let design1='';
        
        const elFig = document.querySelector('.i-1 figure');

        const elMenu = document.querySelectorAll('.t-2 a span');

        let aaa = 0;

        elMenu.forEach(function(a,t){
            a.addEventListener('click',function(){  
                localStorage.pageName2 = t;  
            })
        })
        

            

        const elBot = document.querySelectorAll('.bot a');
        let bbb = 0;
            for(let i=0; i<elBot.length; i++){
                elBot[i].addEventListener('click',function(){
                    elBot[bbb].classList.remove('active');
                    bbb = i;
                    elBot[i].classList.add('active');
                });
            };

            //-----------------product-----------------------------------
            let pageName2 = localStorage.pageName2;
            let type = 'all';
            switch(pageName2){
                case '0': type='all';
                break;
                case '1': type='outer';
                break;
                case '2': type='top';
                break;
                case '3': type='bottom';
                break;
                case '4': type='shoe';
                break;
                case '5': type='acc';
                break;
            }
            change(type)

            

            function change(typeStr){     
                design1 = ''; 
                
                for(let i = 0; i < data.work5.length; i++){      
                    if( data.work5[i].type == typeStr || typeStr == 'all'){      
                        design1 += `<div data-code="${data.work5[i].itemCode}">
                            <a class="n-1" href="${data.work5[i].link}">
                                <img src="${data.work5[i].img1}" class="n-a">
                                <img src="${data.work5[i].img2}" class="n-b">
                                <b>${data.work5[i].name}</b>
                                <span class="us">
                                    <span class="s1">${data.work5[i].detail}</span>
                                    <span class="s2">${data.work5[i].price}</span>
                                </span>
                            </a>
                            </div>`;
                    }
                }
                elFig.innerHTML = design1;

                elMenu[aaa].classList.remove('active');
                aaa = pageName2;
                elMenu[pageName2].classList.add('active');


                const elDiv = document.querySelectorAll('.i-1 figure div');
                elDiv.forEach(function(v,k){
                    v.addEventListener('click',function(e){  
                        // e.preventDefault();
                        localStorage.itemCode = this.dataset.code;  
                    })
                })
                
            }
            
            console.log(elMenu);
            
            for(let i = 0; i < elMenu.length; i++){
                elMenu[i].addEventListener('click',function(){
                console.log(this.textContent.toLowerCase());
                change(this.textContent.toLowerCase())
                }); 
            }
            for(let i=0; i<elMenu.length; i++){
                elMenu[i].addEventListener('click',function(){
                    elMenu[aaa].classList.remove('active');
                    aaa = i;
                    elMenu[i].classList.add('active');
                });              
            };
            
            
            
            
            
    }


};
window.onload = letsGo;