let tab = ['tekst1', 'tekst2', 'tekst3', 'tekst4'];
window.onload = function () {
    addElement(tab);
}

function addElement(tab) {
    for (let i = 0; i < tab.length; i++) {
        const parentListP = document.getElementById('parent-element');


        const newH2 = document.createElement('h2');
        const newTextH2 = document.createTextNode(`${i+1}`);
        newH2.appendChild(newTextH2);
        parentListP.appendChild(newH2);
        const newP = document.createElement('p');
        const newPtext = document.createTextNode(tab[i]);
        parentListP.appendChild(newP);
        newP.appendChild(newPtext);
        newP.setAttribute('id', `test ${i+1}`);


        newH2.onclick = function () {
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
document.forms.myform.onsubmit = function () {
    // Dodaj formularz z pojedynczym polem tekstowym - pozwala
    // on na dodanie kolejnego paragrafu do dokumentu (oczywiście wraz z działającym jak powyżej nagłówkiem).
    if (this.nazwa.value) {
        tab.push(this.nazwa.value);
        console.log(tab);
        const parentListP = document.getElementById('parent-element');
        const newH2 = document.createElement('h2');
        const newTextH2 = document.createTextNode(tab.length);
        parentListP.appendChild(newH2);
        newH2.appendChild(newTextH2);
        p = document.createElement("p");
        p.innerHTML = this.nazwa.value;
        document.getElementById("parent-element").appendChild(p);
        this.nazwa.value = "";
        this.nazwa.focus();

        newH2.onclick = function () {
            p.classList.toggle('hide');
        }
    }
    return false;
}