const $field = document.getElementById('field');
const $btn = document.getElementById('btn');
const $btn1 = document.getElementById('btn1');
const $btn2 = document.getElementById('btn2');
const $btn3 = document.getElementById('btn3');
const $btn4 = document.getElementById('btn4');
const $btn5 = document.getElementById('btn5');
const $btn6 = document.getElementById('btn6');
const $btn7 = document.getElementById('btn7');
const $btn8 = document.getElementById('btn8');
const $mesage = document.getElementById('mesage');

const myArray = [1, 3, 15, 26, 100, -200];
//  dodawanie do konca tabalicy
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
$btn4.addEventListener('click', function () {
    const valueFromField = $field.value;
    updateMyArray4(valueFromField);
    console.log(myArray);

});
$btn5.addEventListener('click', function () {
    const valueFromField = $field.value;
    updateMyArray5(valueFromField);
    console.log(myArray);

});
$btn6.addEventListener('click', function () {
    reversArray();
    console.log(myArray);

});
$btn7.addEventListener('click', function () {
    sortMyArray();
    console.log(myArray);

});
$btn8.addEventListener('click', function () {
    const valueFromField = $field.value;
    filterArray(valueFromField);
    // console.log(myArray);

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
    const txtmesage = "usunieto wartosc  na pozycji " + index + " wartosc " + myArray[myArray.length - 1];
    $mesage.textContent = txtmesage;
}

function updateMyArray3() {
    const $result = document.getElementById('result');
    showMessagedelet2(1);

    myArray.shift(myArray);
    $result.textContent = myArray;


}

function showMessagedelet2(index) {
    const $mesage = document.getElementById('mesage');
    const txtmesage = "usunieto na pozycji " + index + " wartosc " + myArray[0];
    $mesage.textContent = txtmesage;
}

function showMessage2(value, index) {
    const $mesage = document.getElementById('mesage');
    const txtmesage = "dodano wartosc " + value + " na pozycji " + index;
    $mesage.textContent = txtmesage;
}

function updateMyArray4(value) {
    value = parseFloat(value);
    const $result = document.getElementById('result');
    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20) + 1;
    }
    myArray.splice(2, 0, value);

    $result.textContent = myArray;
    showMessage2(value, 2);
}

function showMessage3(index) {
    const $mesage = document.getElementById('mesage');
    const txtmesage = "usunieto wartosc " + myArray[index] + " na pozycji " + (index + 1);
    $mesage.textContent = txtmesage;
}

function updateMyArray5(value) {
    value = parseFloat(value);
    const $result = document.getElementById('result');
    if (isNaN(value)) {
        value = Math.floor(Math.random() * myArray.length) + 1;
    }
    showMessage3(value);
    myArray.splice(value, 1);
    $result.textContent = myArray;


}

function reversArray() {
    let newMyArray = myArray.reverse();
    document.getElementById('mesage').textContent = 'odwrócona tablica: ' + newMyArray;
}

function sortMyArray() {
    let newMyArray = myArray.sort((a, b) => a - b);
    document.getElementById('mesage').textContent = 'posortowana tablica ' + newMyArray;
}

function filterArray(value) {
    value = parseFloat(value);
    const $result = document.getElementById('result');
    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20) + 1;
    }

    function check(value, b) {
        return (value % b == 0)
    }
    let tmp = myArray.filter(check);
    console.log(tmp);
    console.log(myArray);
}