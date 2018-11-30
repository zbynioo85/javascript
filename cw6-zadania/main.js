window.onload = function () {
    liMonthNames();
    liElementparzyste();
    liElementsNames2018();
    liElementsTitle();
    liElementsRandomColor();

    liElementsOnAuxClickColor();
    liElementsOnClickColor();
    liElementsOnClickDefault();
    // InputEventOnInput();
    // InputEventOnChange()
    InputEventOnSubmit();
    InputEventOnClick();
    window.onbeforeunload = function (e) {
        // e.preventDefault();
        // alert('czy chcesz wyjsc');
        e.returnValue = 'czy napewno chcesz wyjsc';
    }
};

// window.addEventListener('beforeunload', function (e) {
//     // Cancel the event as stated by the standard.
//     alert('czy chcesz wyjsc');
//     e.preventDefault();
//     alert('czy chcesz wyjsc');
//     // Chrome requires returnValue to be set.
//     e.returnValue = '';
// });
// do każdego elementu dodaj identyfikator,
//  identyczny jak nazwa miesiąca; sprawdź w 
//  przeglądarce czy identyfikator został ustawiony
function liMonthNames() {
    let liElements = document.getElementsByTagName('li');
    liElements = [...liElements];
    for (let i in liElements) {
        const textLi = liElements[i].textContent;
        console.log(textLi);
        liElements[i].setAttribute('id', textLi);
        liElements[i].hasAttribute('id');
    }
}
// dla każdego elementu ustaw klasę: do miesiecy parzystych
//  "parzysty", do nieparzystych "nieparzysty"
function liElementparzyste() {
    let liElements = document.getElementsByTagName('li');
    liElements = [...liElements];
    for (let i in liElements) {
        if (i % 2 == 0) {
            liElements[i].setAttribute('class', 'parzyste');
        } else {
            liElements[i].setAttribute('class', 'nieparzyste');

        }
        liElements[i].hasAttribute('class');
    }
}
// do każdego miesiąca dodaj atrybut title zawierający informację o liczbie znaków w jego nazwie
function liElementsTitle() {
    let $liElements = document.getElementsByTagName('li');
    for (let i = 0; i < $liElements.length; i++) {
        const textLi = $liElements[i].textContent.length;
        console.log(textLi);
        $liElements[i].setAttribute('title', textLi);
        $liElements[i].hasAttribute('title');
    }
}
// do nazwy każdego miesiąca dopisz 2018
function liElementsNames2018() {
    let $liElements = document.getElementsByTagName('li');
    let textLi2018;
    for (let i = 1; i < $liElements.length; i++) {
        const textLi = $liElements[i].textContent;
        textLi2018 = textLi + " 2018";
        console.log(textLi2018);
        $liElements[i].textContent = textLi2018;
    }
}
// kolor tekstu każdego z miesięcy ustaw na losową 
// wartość wybraną spośród "red", "green", "blue", "orange"
function liElementsRandomColor() {
    const color = ['red', 'green', 'blue', 'orange'];
    let $liElements = document.getElementsByTagName('li');
    for (let i = 0; i < $liElements.length; i++) {
        let colorRandom = Math.floor(Math.random() * 4);
        console.log(colorRandom);
        $liElements[i].style.color = color[colorRandom];
        $liElements[i].hasAttribute('style');
    }
}
// po kliknięciu lewym przyciskiem myszy, 
// ustaw jego tło na kolor lightcyan jeśli to miesiąc parzysty lub na lightblue, jeśli nieparzysty

function liElementsOnClickColor() {

    let liElements = document.getElementsByTagName('li');
    for (let i in liElements) {
        liElements[i].onclick = function () {
            if (i % 2 == 0) {
                liElements[i].classList.add('leftBtnEven')
            } else {
                liElements[i].classList.add('leftBtnOdd');

            }

        }
    }
}
// po kliknięciu prawym, ustaw lightyellow jeśli parzysty lub lightpink jeśli nieparzysty

function liElementsOnAuxClickColor() {
    let liElements = document.getElementsByTagName('li');
    for (let i = 0; i < liElements.length; i++) {
        liElements[i].onauxclick = function () {
            liElements[i].oncontextmenu = function (event) {
                event.preventDefault();
            }
            if (i % 2 == 0) {
                liElements[i].classList.add('rightBtnEven');
            } else {
                liElements[i].classList.add('rightBtnOdd');

            }
        }
    }
}
// jeśli jeszcze raz klikniemy LEWYM przyciskiem w miesiąc,
// którego kolor już został ustawiony na lightcyan lub lighblue
//     (lub PRAWYM, jeśli kolor został ustawiony na lightpink lub lightyellow),
//     wraca on do pierwotnego stanu(ma to działać jak przełącznik).
function liElementsOnClickDefault() {

    let liElements = document.getElementsByTagName('li');
    for (let i in liElements) {
        liElements[i].onclick = function () {
            if (i % 2 == 0) {
                liElements[i].classList.toggle('leftBtnEven');
            } else {
                liElements[i].classList.toggle('leftBtnOdd');
            }

        }
        liElements[i].onauxclick = function () {
            liElements[i].oncontextmenu = function (event) {
                event.preventDefault();
            }
            if (i % 2 == 0) {
                liElements[i].classList.toggle('rightBtnEven');
            } else {
                liElements[i].classList.toggle('rightBtnOdd');
            }

        }
    }
}
// Powyżej listy miesięcy znajduje sie formularz z pojedynczym
//  polem tekstowym. Po wprowadzeniu numeru miesiąca (liczba od 1 do 12), wskazany
//   miesiąc zostanie oznaczony kolorową ramką (oznaczony może być maksymalnie jeden miesiąc, 
//     jeśli więc podano nową wartość, poprzedni jest odznaczany). Wypróbuj i porównaj kilka sposobów 
//     przyjmowania 
// wprowadzonej wartości (może być na osobnych formularzach):
// oninput pola tekstowego
function InputEventOnInput() {
    let liElements = document.getElementsByTagName('li');
    let Input = document.getElementById('input');
    liElements = [...liElements];
    Input.oninput = function () {
        for (let i in liElements) {
            if (this.value === i) {
                liElements[i].classList.add('inputBorder');
            } else {
                liElements[i].classList.remove('inputBorder');
            }
        }
    }
}
// onchange pola tekstowego
function InputEventOnChange() {
    let liElements = document.getElementsByTagName('li');
    let Input = document.getElementById('input');
    liElements = [...liElements];
    Input.onchange = function () {
        for (let i in liElements) {
            if (this.value === i) {
                liElements[i].classList.add('inputBorder');
            } else {
                liElements[i].classList.remove('inputBorder');
            }
        }
    }
}
// onsubmit formularza
function InputEventOnSubmit() {
    let liElements = document.getElementsByTagName('li');
    let Input = document.getElementById('input');
    const $submit = document.getElementById('submit');
    const $form = document.getElementsByTagName('form');
    liElements = [...liElements];
    onsubmit = function () {
        for (let i in liElements) {
            if (Input.value === i) {
                liElements[i].classList.add('inputBorder');
            } else {
                liElements[i].classList.remove('inputBorder');
            }
        }
    }
}
// onclick przycisku zatwierdzającego dane
function InputEventOnClick() {
    let liElements = document.getElementsByTagName('li');
    let Input = document.getElementById('input');
    const $btn = document.getElementById('btn');
    liElements = [...liElements];
    $btn.onclick = function () {
        for (let i in liElements) {
            if (Input.value === i) {
                liElements[i].classList.add('inputBorder');
            } else {
                liElements[i].classList.remove('inputBorder');
            }
        }
    }
}

function onBeforeUnloadf() {
    document.onbeforeunload = function (e) {
        e.returnValue = "";
        alert('czy chcesz wyjsc');
    }

}