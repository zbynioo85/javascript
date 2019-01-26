// zadania B
window.onload = function () {
    // zadanie 1
    btnToggelStyle();
    // zadanie2
    ArrayRandom();
    // zadanie3
    ulClick();
    // zadanie4
    addtable();
    // zadanie5
    queue();


}

function btnToggelStyle() {
    const $btn = document.querySelectorAll('.btn');

    for (let i = 0; i < $btn.length; i++) {
        $btn[i].onclick = function () {

            $btn[i].classList.toggle('green');
            document.querySelector('.result').textContent = checkClick();

        }

    }

    function checkClick() {
        let textResult;
        const $green = document.querySelectorAll('.green');
        switch ($green.length) {
            case 1:
                textResult = 'Jeden włączony';
                break;
            case 2:
                textResult = 'Dwa włączone';
                break;
            case 3:
                textResult = 'Trzy włączone';
                break;
            default:
                textResult = 'Nic nie włączono'
        }
        return textResult;
    }

}

function ArrayRandom() {
    const $tabelLenght = document.getElementById('TabelLenght')
    $tabelLenght.onchange = function () {
        if (this.value <= 0) {
            document.querySelector('.tabelNumber').textContent = 'podaj liczbe wiekszą od 0';
            // warunek dla wartosci mniejszych lub = 0
        } else if (this.value != isNaN()) {
            let table = random_number(this.value);
            table.splice(0, 1, 3);
            document.querySelector('.tabelNumber').textContent = table;
            let result = sameNumber(table);
            document.querySelector('.tabelNumberSame').textContent = result;
        } else {
            document.querySelector('.tabelNumber').textContent = 3;
            // warunek dla wartosci 1
        }
    }

    function random_number(number) {
        let los = new Array(number);
        for (let i = 0; i < number; i++) {
            los[i] = Math.round(Math.random() * 6) - 3;
        }
        return los;
    }

    function sameNumber(tab) {
        let result = 0;
        for (let i = 1; i < tab.length; i++) {
            if (tab[i - 1] == tab[i]) {
                result += 1;
            }
        }
        return result;
    }
}



function ulClick() {
    const $liElements = document.querySelectorAll('li');
    let sumClick = [];
    let text = [];
    for (let i = 0; i < $liElements.length; i++) {
        sumClick[i] = 0;
        text[i] = $liElements[i].textContent;
        $liElements[i].onclick = function () {
            let dateClick = new Date();
            sumClick[i] += 1;
            $liElements[i].textContent = `${text[i]} kliknieto: ${sumClick[i]} razy, czas ostatniego klikniecia:
             ${dateClick.toLocaleDateString()} ${dateClick.toLocaleTimeString()}`
        }
    }
}

function addtable() {
    const $trnumber = document.querySelector('.trNumber');
    const $tdnumber = document.querySelector('.tdNumber');
    const $warning = document.querySelector('.warning');
    const $table = document.querySelector('table');
    document.querySelector('.makeTable').onclick = function () {
        if ($table.childElementCount > 0) {
            location.reload();
        } else if ($trnumber.value < 1 || $tdnumber.value < 0) {
            $warning.textContent = `podaj wiekszą liczbę`;
        } else if (($trnumber.value != '') && ($tdnumber.value != '')) {
            $warning.textContent = `utworzono tabelę`;
            for (let i = 0; i < $trnumber.value; i++) {
                const row = $table.insertRow();
                for (let i = 0; i < $tdnumber.value; i++) {
                    row.insertCell();
                }

            }
            const tdText = document.querySelectorAll('td');
            let ArrayTd = [];
            for (let i = 0; i < tdText.length; i++) {
                ArrayTd[i] = Math.round(Math.random() * 99) + 1;
                tdText[i].textContent = `${ArrayTd[i]}`
                if (tdText[i].textContent % 2 == 0) {
                    tdText[i].classList.add('bold');
                }
            }
            let min = Math.min(...ArrayTd);
            let max = Math.max(...ArrayTd);
            for (let i in ArrayTd) {
                if (min === ArrayTd[i]) {
                    tdText[i].classList.add('greenMin');
                } else if (max === ArrayTd[i]) {
                    tdText[i].classList.add('redMax');
                }
            }


        } else {
            $warning.textContent = `podaj wartosci liczbowe`;
        }

    }
}

function queue() {
    const $addClient = document.querySelector('.addClient');
    const $removeClient = document.querySelector('.removeClient');
    const $tabClients = document.querySelector('.tab table');
    const $clientInfo = document.querySelector('.clientInfo p');
    const row = $tabClients.insertRow();
    let clientNumber = 0;
    let cellNumber = 0;
    $addClient.onclick = function () {

        if (cellNumber >= 10) {
            let clientNumber2 = clientNumber + 1;
            $clientInfo.innerHTML = `dla klienta ${clientNumber2} 
            niema miejsca w kolejce</br>${$clientInfo.innerHTML} `
        } else {
            clientNumber++;
            cellNumber++;
            row.insertCell(-1).textContent = clientNumber;
            let TimeAdd = new Date();
            $clientInfo.innerHTML = `${clientNumber}.klient pojawił się w kolejce o:
             ${TimeAdd.toLocaleTimeString()}</br>${$clientInfo.innerHTML}`
        }
    }
    $removeClient.onclick = function () {
        if (cellNumber <= 0) {
            $clientInfo.innerHTML = `kolejka pusta</br>${$clientInfo.innerHTML}`
        } else if (clientNumber <= 0) {
            clientNumber = 0;
        } else {
            let remClient = document.querySelectorAll('.tab td');
            row.deleteCell(0);
            cellNumber--;
            let TimeAdd = new Date();
            $clientInfo.innerHTML = `${remClient[0].innerHTML}. klienta obsłużono
             o: ${TimeAdd.toLocaleTimeString()}</br>${$clientInfo.innerHTML}`
        }
    }


}