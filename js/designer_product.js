function letsGo(){

    fetch('data/data.json')
    .then( res => res.json() )
    .then( data => callback(data));

    function callback(data){

        let img1,img2,img3,img4,name,detail,price;
        let tagList1='', tagList2='',tagList3='', i=0;

        const elFig = document.querySelector('.i-1');
        const elDiv = document.querySelector('.f-2 div');
        const elimg = document.querySelector('.i-1 span img');
        const elSelect = document.querySelector('select');

        const number = localStorage.itemCode ; 
        change(number); 
            


        function change(i){

            
                tagList1='';
                tagList2='';

                tagList1 += `
                <span><img src="${data.work4[i-1].sub_img1}"></span>
                <span><img src="${data.work4[i-1].sub_img2}"></span>
                <span><img src="${data.work4[i-1].sub_img3}"></span>
                <span><img src="${data.work4[i-1].sub_img4}"></span>
                `
                tagList2 +=`
                <p>${data.work4[i-1].name}</p>
                <p>${data.work4[i-1].detail}</p>
                <p>${data.work4[i-1].price}</p>
                `
                tagList3 += `
                <otpgroup>
                <option>${data.work4[i-1].option1}</option>
                <option>${data.work4[i-1].option2}</option>
                <option>${data.work4[i-1].option3}</option>
                <option>${data.work4[i-1].option4}</option>
                </otpgroup>
                `
            }
                elFig.innerHTML = tagList1;
                elDiv.innerHTML = tagList2;
                elSelect.innerHTML = tagList3;
                console.log(elSelect);
        
    }
};
window.onload = letsGo;