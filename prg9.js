// 13. DOM Manupulation : (document object model)

// DOM  Methods:
// 1. getElementById() : 
let subEle = document.getElementById('click');   
console.log(subEle);
subEle.style.border = "solid 2px red";
subEle.style.margin = "10px";
subEle.style.margin = "5px";

// 2. getElementByClassName() : 
let divEle = document.getElementsByClassName('container');   
console.log(divEle);
divEle[0].style.background = "yellow";
// divEle[1].style.background = "cyan";

// 3. adding another class list to divEle element from style sheet
divEle[1].classList.add('bg-primary');
divEle[1].classList.add('text-success');
divEle[1].classList.remove('text-success');

// 4. accessing inner html of container class
console.log(divEle[0].innerHTML);
console.log(divEle[1].innerHTML);

// 5. accessing inner text of container class
console.log(divEle[0].innerText);
console.log(divEle[1].innerText);

// 6. getElementByTagName() :
tn =  document.getElementsByTagName('h1');
console.log(tn[0]);
console.log(tn[1]);

// 7. Creating element by javascript : 
let CreEle = document.createElement('p');
CreEle.innerText= "this element is created by the javascript";
CreEle.style.color = "yellow";

let CreEle1 = document.createElement('button');
CreEle1.innerText = "submit Button";
CreEle1.style.border = "2px solid red";

//  now adding created element to the existing element
tnDiv = document.getElementsByTagName('div');

// appending child element to existing element
tnDiv[1].appendChild(CreEle);

// replacing child element by new element
tnDiv[1].replaceChild(CreEle1, CreEle);

// removing child element
tnDiv[1].removeChild(CreEle1);



// 8. querySelector() :
let s1 = document.querySelector('.container');
console.log(s1);

// 9. querySelectorAll() :
let s2 = document.querySelectorAll('.container');
console.log(s2);

// 10. document models:
console.log(document.location);
console.log(document.title);
console.log(document.scripts);
console.log(document.links);
console.log(document.forms);
console.log(document.images);
console.log(document.domain);


