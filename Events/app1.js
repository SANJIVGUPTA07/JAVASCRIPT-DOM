let newLi = document.createElement('li');

newLi.className = 'list-items';
newLi.id = 'unique-li';
// newLi.title/atrribute..  

// adding content to new list 
// let conNewLi = document.createTextNode('PUBG IS BEST');
// newLi.append(conNewLi); or

newLi.innerHTML = 'PUBGM IS BEST';

// adding this list item in html code 
let ul = document.querySelector('ul');
ul.appendChild(newLi)




console.log(newLi)