const greenSquare = document.querySelector('.main');
const blueCircle = document.querySelector('.one');
const orangeCircle = document.querySelector('.two');
const button = document.querySelector('button');

// Click
button.addEventListener('click', function () {
  button.textContent = `Click`;
});

// DoubleClick
button.addEventListener('dblclick', function () {
  button.textContent = ` DoubleClick`;
});

// Mouseover
blueCircle.addEventListener('mouseover', function () {
  blueCircle.style.backgroundColor = 'orange';
  orangeCircle.style.backgroundColor = 'blue';
});

// Mouseout
blueCircle.addEventListener('mouseout', function () {
  orangeCircle.style.backgroundColor = 'orange';
  blueCircle.style.backgroundColor = 'blue';
});

// Mouseenter
greenSquare.addEventListener('mouseenter', function () {
  greenSquare.style.backgroundColor = 'red';
});

// Mouseleave
greenSquare.addEventListener('mouseleave', function () {
  greenSquare.style.backgroundColor = 'green';
});

// Mousemove
greenSquare.addEventListener('mousemove', function(e){
  document.body.style.background = `rgb(${e.offsetX}, ${e.offsetX}, 40)`;
})


//Tab
let tab; 
let tabContent; 
 
window.onload=function() {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}
document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
       for (var i=0; i<tab.length; i++) {
           if (target == tab[i]) {
               showTabsContent(i);
               break;
}}}}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}