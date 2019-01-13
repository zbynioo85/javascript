// zadania B
window.onload = function(){
    btnToggelStyle();


}

function btnToggelStyle (){
   const $btn= document.querySelectorAll('.btn');
   
   for(let i=0;i<$btn.length;i++){
$btn[i].onclick=function(){
   
       $btn[i].classList.toggle('green');

    }
        
}
const $green=document.querySelectorAll('.green');
console.log($green);
}