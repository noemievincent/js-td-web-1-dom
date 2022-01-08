// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 8 : « Couleurs » :
1. Demandez à l'utilisateur de choisir la couleur de texte et la couleur de fond qu'il souhaite appliquer aux titres
   (indiquez-lui qu'il doit vous fournir la couleur souhaitée sous son nom anglais ou bien en utilisant le format hexadécimal ou RGB).
   Le message pourrait être celui-ci : 'Entrez la couleur de texte que vous souhaitez appliquer aux titres
   (utilisez soit le nom anglais de la couleur, soit le format hexadécimal, soit le format RGB) :' ;
2. Utilisez ces couleurs pour satisfaire les préférences de votre utilisateur
*/

let sColor = prompt("Choisissez une couleur à appliquer aux titres :");
let sBackground = prompt("Choisissez une couleur de fond à appliquer aux titres:");

console.log(sColor);
console.log(sBackground);

let h1Elt = document.getElementsByTagName("h1");

for (let i = 0; i < h1Elt.length; i++) {
    h1Elt[i].style.color = sColor;
    h1Elt[i].style.backgroundColor = sBackground;
}



