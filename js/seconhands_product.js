// const elTabBtn = document.querySelectorAll('.ind a'),
//     elTabCon = document.querySelectorAll('.img-1 img');
//         let num = 0;

//         for(let i=0; i<elTabBtn.length; i++){  
//             elTabBtn[i].addEventListener('click',function(){
//                 elTabBtn[num].classList.remove('active');
//                 elTabCon[num].classList.remove('active');
                
//                 elTabBtn[i].classList.add('active');
//                 elTabCon[i].classList.add('active');
//                 num = i;
//             });
//         };
function letsGo(){

    fetch('data/data.json')
    .then( res => res.json() )
    .then( data => callback(data));

    function callback(data){

        let tagList1='', tagList2='', tagList3='', i=0;

        const elDetail = document.querySelector('.detail');
        const elimg = document.querySelector('.img-1');
        const elLi = document.querySelector('.t-1 ul');

        const number = localStorage.itemCode ; 
        change(number); 
            


        function change(i){

            
                tagList1='';
                tagList2='';

                tagList1 += `
                <img src="${data.work5[i-1].sub_img1}">
                <img src="${data.work5[i-1].sub_img2}">
                `
                tagList2 +=`
                <p>${data.work5[i-1].detail}</p>
                <p>${data.work5[i-1].price}</p>
                `

                tagList3 += `
                <li>${data.work5[i-1].name}</li>
                <li>${data.work5[i-1].name}</li>
                <li>${data.work5[i-1].name}</li>
                <li>${data.work5[i-1].name}</li>
                <li>${data.work5[i-1].name}</li>
                `
            }
            elimg.innerHTML = tagList1;
            elDetail.innerHTML = tagList2;
            elLi.innerHTML = tagList3;
                
        
    }
};
window.onload = letsGo;