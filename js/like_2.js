function letsGo(){

    fetch('data/data.json')
    .then( res => res.json() )
    .then( data => callback(data));

    function callback(data){
        let tagList1='',tagList2='';
        const elMain = document.querySelector('.i-2');
        const elA1 = document.querySelector('.a-1');
        const elA2 = document.querySelector('.a-2');
        const elImg = document.querySelector('.m-1');

        // const number2 = localStorage.itemCode;
        
        // change();
        // for(let i=0; i<data.work4.length; i++){
        //     tagList1='';
        //     tagList2='';

        //     tagList1 +=`
        //     <div class="i-1">
        //         <div><a href="like.html">x</a></div>
        //     </div>`    
        //     tagList2 +=`
        //     <div class="a-1">
        //             <div>${data.work4[i].name}</div>
        //             <div>${data.work4[i].price} </div>
        //     </div>
        //     <div class="a-2">
        //         <div>${data.work4[i].detail}</div>
        //             <select>
        //                     <otpgroup>
        //                         <option>${data.work4[i].option1}</option>
        //                         <option>${data.work4[i].option2}</option>
        //                         <option>${data.work4[i].option3}</option>
        //                         <option>${data.work4[i].option4}</option>
        //                     </otpgroup>
        //             </select> 
        //     </div>
        //     `    
        // }
        // elImg.innerHTML += tagList1;
        // elMain.innerHTML += tagList2;
    }
};
window.onload = letsGo;