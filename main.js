//### 1. Stock la balise body dans une variable du nom de "myBody"

let myBody =  document.getElementsByTagName('body')[0];
//### 2. Trouve une méthode pour récuperer le premier élément de "myBody" et affiche le dans un console.log
console.log(myBody.firstElementChild);
//### 3. Trouve une méthode pour récuperer le dernièr élément de "myBody" et affiche le dans un console.log
console.log(myBody.lastElementChild);
//### 4. Trouve une méthode pour récuperer tous les enfants de la premiere div puis stock dans une variable "exo4" et affiche la dans un console.log

let exo4 = document.getElementsByTagName('div')[0];

console.log(exo4);

//### 5. Récupère le premier li, puis trouve une méthode JS pour afficher l'élément suivant( c'est a dire le second li ) et affiche le résultat dans un CL

let li = document.getElementsByTagName('li')[0];
let li2 =li.nextElementSibling;
console.log(li2);

//### 6.

let libackToback =li.firstElementChild;

console.log(libackToback);

