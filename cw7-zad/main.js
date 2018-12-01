let tab=['tekst1','tekst2','tekst3'];
console.log(tab.length);
console.log(tab)
window.onload=function(){
    addElement(tab);
}
function addElement(tab){
for( let i=0;i<tab.length;i++){
 const parentListP=document.getElementById('parent-element');


const newH2=document.createElement('h2');
const newTextH2=document.createTextNode(`${i+1}`);
newH2.appendChild(newTextH2);
const newP=document.createElement('p');
const newPtext=document.createTextNode(tab[i]);
parentListP.appendChild(newH2);
parentListP.appendChild(newPtext);
newP.setAttribute('id',`test ${i+1}`);
parentListP.appendChild(newP);

newH2.onclick=function(){
    // if(newP.classList.contains('hide')){
    //     newP.classList.remove('hide');
    // }
    // else{
    //   newP.classList.add('hide')
    // }
    newP.classList.toggle('hide');
}
}
}
document.forms.myform.onsubmit = function formu () {
    if (this.nazwa.value) {
        tab.push(this.value);
    var p = document.createElement("p");
    p.innerHTML = this.nazwa.value;
    document.getElementById("parent-element").appendChild(p);
    this.nazwa.value = "";
    this.nazwa.focus();
    }
    return false;
}