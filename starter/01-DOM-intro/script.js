// let sLis = '';
//
// for (let i=0; i<100; i++) {
//    if (i%5 === 0 && i%3 === 0) {
//        sLis = sLis + `<li>FizzBuzz</li>`;
//    } else if (i%3 === 0) {
//        sLis = sLis + `<li>Fizz</li>`;
//    } else if (i%5 === 0) {
//        sLis = sLis + `<li>Buzz</li>`;
//    } else {
//        sLis = sLis + `<li>${i}</li>`;
//    }
// }
//
// document.querySelector('.list').innerHTML = sLis;

const eUl = document.querySelector('.list');

for (let i=1; i<=100; i++) {
    if (i%5 === 0 && i%3 === 0) {
        eUl.insertAdjacentHTML('beforeend', '<li>FizzBuzz</li>');
    } else if (i%3 === 0) {
        eUl.insertAdjacentHTML('beforeend', '<li>Fizz</li>');
    } else if (i%5 === 0) {
        eUl.insertAdjacentHTML('beforeend', '<li>Buzz</li>');
    } //else {
    //     eUl.insertAdjacentHTML('beforeend', `<li>${i}</li>`);
    // }
}

console.log(typeof eUl.className, eUl.className); //string list toto
// eUl.className = "list";

// let sClasses = eUl.className;
// sClasses += " tata";
// eUl.className = sClasses;

eUl.classList.add("tata");
eUl.classList.toggle("tata"); //string list toto
eUl.classList.toggle("tata"); //string list toto tata

console.log(typeof eUl.className, eUl.className); //string list

//document.querySelectorAll(".Box-row").length; voir combien de repos il y a sur GitHub

// const aLis = document.getElementsByTagName("li");
// for (const aLi of aLis) {
//     console.log(aLi.className);
//     aLi.className = "tata";
//     aLi.textContent = "tata";
// }

// ajouter une li dans une ul : document.querySelector(".list").innerHTML="<li>lala</li>";