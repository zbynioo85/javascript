// let $test=document.querySelector('[data-test-array]');
// $test=$test.getAttribute('data-test-array');
// $test=$test.split(',');
// const test=document.getElementById('test');
// test.textContent=$test;
// console.log(test);

// const $btn=document.getElementById('test');
// $btn.onclick=function(){
//     const $test =document.querySelector('[data-id]');
//     if(this.id===$test.getAttribute('data-id')){
//         $test.classList.remove('hide');S
    
// }}
const $btn=document.getElementById('btn');
$btn.onclick=function(){
    const $ParentElement=document.getElementById('ParentElement');
    const newLI=document.createElement('li');
    let valToDo=document.getElementById('ToDoInput').value;
    const newTextLI=document.createTextNode(valToDo);
    newLI.appendChild(newTextLI);
    $ParentElement.appendChild(newLI);
    const newButton=document.createElement('button');
    newLI.appendChild(newButton);
    const newTextBuTT=document.createTextNode('usuń');
    newButton.appendChild(newTextBuTT);
    newButton.onclick =function(){
        $ParentElement.removeChild(newLI);
    };
    newLI.contentEditable=true;



}

// function usuń(element) {
//     element.removeChild();
//    }