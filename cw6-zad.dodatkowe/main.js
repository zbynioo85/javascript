window.onload = function () {
    _P_Lenght();
    _randomPargraph();
    _evenItalicP();
    _onClickUpperCase();
    _pBorder();
    _fontSizeInput();
    pHidden();
}

function _P_Lenght() {
    // Znajdź paragraf zawierający najmniej tekstu i zmień kolor znaków na zielony. 
    // W paragrafie z największą ilością tekstu zmień kolor na czerwony.
    let $paragraph = document.querySelectorAll('p');
    $paragraph = [...$paragraph];
    let p_len = new Array();
    for (let i in $paragraph) {
        p_len[i] = $paragraph[i].textContent.length;
    }
    let min = Math.min.apply(Math, p_len);
    let max = Math.max.apply(Math, p_len);
    console.log(p_len, max, min);
    for (let i in $paragraph) {
        if (p_len[i] == max) {
            $paragraph[i].style.color = 'red';
        } else if (p_len[i] == min) {
            $paragraph[i].style.color = 'green';
        }

    }
}

function _randomPargraph() {
    // Wytłuść losowy paragraf (font-weight).
    let $paragraph = document.querySelectorAll('p');
    $paragraph = [...$paragraph];
    let randomP = Math.floor(Math.random() * $paragraph.length);
    console.log(randomP);
    $paragraph[randomP].classList.add('bold');
}

function _evenItalicP() {
    // W co drugim paragrafie ustaw pismo pochyłe (font-style).
    let $paragraph = document.querySelectorAll('p');
    $paragraph = [...$paragraph];
    for (let i in $paragraph) {
        if (i % 2 == 0) {
            $paragraph[i].classList.add('italic')
        }
    }
}

function _onClickUpperCase() {
    // Po kliknięciu w paragraf lewym przyciskiem myszy, 
    // tekst zamieniany jest na pisany dużymi literami (ustaw atrybut autocapitalize na characters, albo styl text-transform na uppercase).
    //  Po kliknięciu prawym przyciskiem, wraca on do stanu poprzedniego.
    let $paragraph = document.querySelectorAll('p');
    for (let i in $paragraph) {
        $paragraph[i].onclick = function () {
            $paragraph[i].classList.add('upercase');
        }
        $paragraph[i].onauxclick = function () {
            $paragraph[i].oncontextmenu = function (event) {
                event.preventDefault();
            }

            $paragraph[i].classList.remove('upercase');
        }
    }
}
// Pierwszy paragraf jest wyróżniony ramką. Ponad tekstem znajdują
//  się dwa przyciski "poprzedni" i "następny". Klikanie w przyciski
//   przenosi wyróżnienie do następnego lub poprzedniego paragrafu (działa to cyklicznie,
//      czyli jeśli
//      oznaczony jest ostatni paragraf i ktoś wybierze "następny", ramka przeniesie się do
//       pierwszego).


function _pBorder() {
    let $paragraph = document.querySelectorAll('p');
    const $btn1 = document.getElementById('btn1');
    const $btn2 = document.getElementById('btn2');
    let it = 0;
    $paragraph = [...$paragraph];

    $paragraph[it].classList.add('border');

    $btn1.onclick = function () {
        $paragraph[it].classList.remove('border');
        it++;
        if (it >= $paragraph.length) {
            it = 0;
        }
        if ($paragraph[it].classList.contains('hidden')) {
            $paragraph[it].classList.remove('border');
            it++;
            if (it >= $paragraph.length) {
                it = 0;
            }
        }
        $paragraph[it].classList.add('border');
    }

    $btn2.onclick = function () {
        $paragraph[it].classList.remove('border');
        it--;
        if (it < 0) {
            it = $paragraph.length - 1;
        }
        if ($paragraph[it].classList.contains('hidden')) {
            $paragraph[it].classList.remove('border');
            it--;
            if (it < 0) {
                it = $paragraph.length - 1;
            }
        }
        $paragraph[it].classList.add('border');
    }
}

function _fontSizeInput() {
    // Ponad tekstem znajduje się pole formularza - można tam wpisać wartość,
    //  co powoduje zmianę rozmiaru tekstu wybranego paragrafu (w pikselach).
    //   Jeśli wprowadzona wartość nie jest dozwolona
    //  (np. nie jest liczbą), tło pola tekstowego zamienia się na kolor czerwony.
    const $inputt = document.getElementById('inputt');
    let $paragraph = document.querySelectorAll('p');
    $inputt.onchange = function () {
        if (isNaN(this.value)) {
            $inputt.classList.add('back_red');
        } else {
            $inputt.classList.remove('back_red');
            $paragraph = [...$paragraph];
            for (let i in $paragraph) {
                $paragraph[i].style.fontSize = this.value + 'px';
            }

        }
    }
}

function pHidden() {
    // Ponad tekstem znajduje się przycisk "ukryj" -
    //  po jego naciśnięciu, ukrywany jest losowy paragraf.
    //   Jeśli naciśniemy go ponownie, ukryty uprzednio paragraf jest odsłaniany,
    //    a chowany jakiś inny (o ile istnieje). 
    // Upewnij się, że nie da się ustawić ramki na ukrytym paragrafie(powinien być pomijany).
    let $paragraph = document.querySelectorAll('p');
    const $btn3 = document.getElementById('btn3');
    $paragraph = [...$paragraph];
    let los = Math.floor(Math.random() * $paragraph.length);
    // $paragraph[los].classList.toggle('hidden');
    $btn3.onclick = function () {

        if ($paragraph[los].classList.contains('hidden')) {
            $paragraph[los].classList.toggle('hidden');
            los = Math.floor(Math.random() * $paragraph.length);
            $paragraph[los].classList.toggle('hidden');
            if ($paragraph[los].classList.contains('border')) {
                $paragraph[los].classList.toggle('hidden');
                los = Math.floor(Math.random() * $paragraph.length);
                $paragraph[los].classList.toggle('hidden');
            }
        } else {
            los = Math.floor(Math.random() * $paragraph.length);
            $paragraph[los].classList.toggle('hidden');
            if ($paragraph[los].classList.contains('border')) {
                $paragraph[los].classList.toggle('hidden');
                los = Math.floor(Math.random() * $paragraph.length);
                $paragraph[los].classList.toggle('hidden');
            }
        }
    }
}