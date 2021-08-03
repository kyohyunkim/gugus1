function letsGo(){

    fetch('data/data.json')
    .then( res => res.json() )
    .then( data => callback(data));

    function callback(data){

        const elShop1 = document.querySelector('.list li:nth-of-type(1)');
        const elShop2 = document.querySelector('.list li:nth-of-type(2)');
        const elShop3 = document.querySelector('.list li:nth-of-type(3)');
        const elShop4 = document.querySelector('.list li:nth-of-type(4)');
        const elShop5 = document.querySelector('.list li:nth-of-type(5)');
        const elShop6 = document.querySelector('.list li:nth-of-type(6)');
        const link = 

        elShop1.addEventListener('click',function(){
                
        })
    }


};
window.onload = letsGo;