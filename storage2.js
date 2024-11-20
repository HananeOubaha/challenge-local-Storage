
// Sélecteur : ul li cible tous les <li> dans tous les <ul>.
// Résultat : Une NodeList contenant les <li> trouvés.
// Utilisation : Parcourez, accédez ou modifiez ces éléments.
// Cela vous permet de manipuler facilement les listes HTML via JavaScript !
// Utilise la méthode document.querySelectorAll pour sélectionner tous les éléments <li> qui sont des descendants de tous les éléments <ul> présents dans le document HTML.
// Le résultat est une NodeList contenant tous les éléments <li> correspondants.
// Une NodeList : Une NodeList est similaire à un tableau. Elle contient une collection d'éléments DOM qui correspondent au sélecteur ul li.

let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment"); 


// window.localStorage.clear();
// if (window.localStorage.getItem("color")){
//     console.log("yes");
// }
// else{
//     console.log("no"); 
// }

if (window.localStorage.getItem("color"))
    { //if there is color 
      exp.style.backgroundColor = window.localStorage.getItem("color");
    }
    else{ //if there is  no color
         console.log("no"); 
        }

console.log(lis);
console.log(typeof(lis));

// maintenant je veut que lorsque je click sur un li de ma list ul 
// va m'affiché sont datacolor directement dans la console 
// donc je vais faire une boucle foreach qui va parcourir tout les li que j'ai 
// et je vais ajouté un event listner de click qui contient l'vent e responsable de l'affichage dans la console de la couleur de li =carré dans ce cas
// la fonction fléchée (e) => {...} est déclenchée.*
// La fonction reçoit un objet événement (e).
// e.currentTarget :

// L'attribut currentTarget fait référence à l'élément DOM qui a écouté l'événement, ici le <li> cliqué.
// dataset.color :
// dataset est une API qui permet d'accéder aux attributs personnalisés HTML qui commencent par data-.
// Par exemple, si un <li> contient l'attribut data-color="rouge", vous pouvez accéder à sa valeur avec dataset.color, qui retourne "rouge".
// console.log(e.currentTarget.dataset.color) :
// Affiche dans la console la valeur de l'attribut data-color du <li> cliqué.

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
         // console.log(e.currentTarget.dataset.color);
        // Remove "active" class from all list items
        lis.forEach((li) => {
            li.classList.remove("active");
        });
        // Add "active" class to the current element
        e.currentTarget.classList.add("active");
        // add current color to local storage 
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        // change div background color 
        exp.style.backgroundColor = e.currentTarget.dataset.color 
    });
});



// jusqu'a maitenant tout est bien ms on dois savoir dans le local storage est ce que la couleur existe ou pas c'est pour
// cela on vas ajouté deux conditions pour vérifié l'existance de la couleur en haut 











// //  le méme code mq cette fois-ci plus simple 
// for (let li of lis) {
//     li.addEventListener("click", function (e) {
//         // console.log(e.currentTarget.dataset.color);
//         // remove active class from all lis 
//        for(let li of lis){
//         li.classList.remove("active");
//        };
//     //   add active class to currznt element 
//     e.currentTarget.classList.add("active") ;
//     });
