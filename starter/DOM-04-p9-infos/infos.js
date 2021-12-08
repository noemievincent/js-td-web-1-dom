// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
*/

let contenuElt = getComputedStyle(document.getElementById("contenu"));
let largeurElt = contenuElt.width;
let hauteurElt = contenuElt.height;

document.getElementById("infos").insertAdjacentHTML("beforeend", `<ul><li>largeur : ${largeurElt}</li><li>hauteur : ${hauteurElt}</li></ul>`);