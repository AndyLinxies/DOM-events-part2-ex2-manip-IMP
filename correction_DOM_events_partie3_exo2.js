// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

//1
let div = Array.from(document.querySelector('#content').children);

let maj =(el) =>{
    console.log(el);
}

div.forEach(element => {
    element.addEventListener('click', function(){maj(element)});
});

//2
let div_exo2 = document.querySelector('#content');


let Upper =(el) =>{
    el.style.textTransform = "uppercase";
}

div.forEach(element => {
    element.addEventListener('dblclick', function() {Upper(element)})
});

//3
let border1 = "border: 1px solid gold;";
let backgroundColor1 = "background-color: blue;";
let backgroundColor2 = "background-color: red;";
let border2 = "border: 5px dotted gold;";
let btn = document.querySelector('input');
let numRandom;
let tableau = [border1, border2, backgroundColor1, backgroundColor2];

let f =(random, tab) =>{
    random = Math.round(Math.random()*(tableau.length-1));
    Array.from(div_exo2.children).forEach(element => {
        console.log(element);
        element.style.cssText = tab[random];
    });
}

btn.addEventListener('click', function() {f(numRandom, tableau)});