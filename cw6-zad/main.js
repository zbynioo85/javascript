window.onload=function(){
liMonthNames();
liElementparzyste();
};
// do każdego elementu dodaj identyfikator,
//  identyczny jak nazwa miesiąca; sprawdź w 
//  przeglądarce czy identyfikator został ustawiony
function liMonthNames(){
let liElements=document.getElementsByTagName('li');
for(let i=0;i<liElements.length;i++){
    const textLi=liElements[i].textContent;
    console.log(textLi);
    liElements[i].setAttribute('id',textLi);
    liElements[i].hasAttribute('id');
}
}
// dla każdego elementu ustaw klasę: do miesiecy parzystych
//  "parzysty", do nieparzystych "nieparzysty"
function liElementparzyste(){
    let liElements=document.getElementsByTagName('li');
    for(let i=0;i<liElements.length;i++){
        if(i%2==0){
        liElements[i].setAttribute('class','parzyste');}
        else{
            liElements[i].setAttribute('class','nieparzyste');}
        }
        liElements[i].hasAttribute('class');
    } 
