const $field = document.getElementById('field');
const $btn = document.getElementById('btn');
const $btn1=document.getElementById('btn1');
const $btn2=document.getElementById('btn2');
const $btn3=document.getElementById('btn3');
const $mesage = document.getElementById('mesage');

const myArray = [1, 3, 15, 26, 100, -200];
//  dodawanie do konca toolbarlicy
$btn.addEventListener('click', function () {
    const valueFromField = $field.value;
    updateMyArray(valueFromField);

});
// dodawanie do poczatku tablicy
$btn1.addEventListener('click', function () {
    const valueFromField = $field.value;
    updateMyArray1(valueFromField);

});
$btn2.addEventListener('click', function () {
    updateMyArray2();
    console.log(myArray);

});
$btn3.addEventListener('click', function () {
    updateMyArray3();
    console.log(myArray);

});
function updateMyArray(value) {
    value = parseFloat(value);
    const $result = document.getElementById('result');
    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20) + 1;
    }
    myArray.push(value);
    
    $result.textContent = myArray;
    showMessage(value, myArray.length);
}
function showMessage(value, index) {
    const $mesage = document.getElementById('mesage');
    const txtmesage = "dodano wartosc " + value + " na pozycji " + index;
    $mesage.textContent = txtmesage;
}
function updateMyArray1(value) {
    value = parseFloat(value);
    const $result = document.getElementById('result');
    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20) + 1;
    }
    myArray.unshift(value);
    
    $result.textContent = myArray;
    showMessage(value, 1);
}
function updateMyArray2() {
    const $result = document.getElementById('result');
    showMessagedelet(myArray.length);
    $result.textContent = myArray;
    myArray.pop(myArray.length);
    
    
}
function showMessagedelet(index) {
    const $mesage = document.getElementById('mesage');
    const txtmesage = "usunieto wartosc  na pozycji " + index +" wartosc "+ myArray[myArray.length-1] ;
    $mesage.textContent = txtmesage;
}
function updateMyArray3() {
    const $result = document.getElementById('result');
    showMessagedelet2(1);
    $result.textContent = myArray;
    myArray.shift(myArray.length);
    
    
}
function showMessagedelet2(index) {
    const $mesage = document.getElementById('mesage');
    const txtmesage = "usunieto wartosc  na pozycji " + index +" wartosc "+ myArray[0] ;
    $mesage.textContent = txtmesage;
}