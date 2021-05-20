// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

//Ex1
let div = Array.from (document.querySelector('div').children);
div.forEach(element => {
element.addEventListener('click',(e)=>{
console.log(e.target);
})
});
//Ou tout simplement

//div.document.querySelector('div');
// div.addEventListener('click',(e)=>{
// console.log(e.target);
//})

//Ex2
let div1 = document.querySelector('div')
div1.addEventListener('dblclick',(e)=>{
    e.target.innerText=e.target.innerText.toUpperCase();
})

// //Ex3
let borderSol = 'border: 1px solid gold';
let backgColBlue = 'background-color: blue';
let backgColRed = 'background-color: red';
let borderDot = 'border: 5px dotted gold';
let tab =[borderDot,borderSol,backgColBlue,backgColRed];

let btn =document.querySelector('input')
let numRandom;
//console.log(numRandom);
let tabElRandom = tab[numRandom];
//console.log(tabElRandom);

function test3(random,tableau) {
    random =Math.round(Math.random()*(tab.length-1)); //pour que le choix se fasse sans devoir rafraichir
    div.forEach(element => {
        element.setAttribute('style',tableau[random]) 
    })
};

btn.addEventListener('click',function(){test3(numRandom,tab)})

//ou en moins dynamique
// div.forEach(element => {
//     btn.addEventListener('click',()=>{
//         element.setAttribute('style',tabElRandom)
//     })
// })