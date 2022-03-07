import {sortAZFilms } from './data.js';

import data from './data/ghibli/ghibli.js';

function showFilms(films){
    let i=0;
    const box = document.createElement('section'); 

    while(i<films.length)
    {
     
    const targetBox=document.createElement('div');
    const target = document.createElement('div');
    const faceTarget = document.createElement('div');
    const poster = document.createElement('img');
    const backTarget= document.createElement('div');
    const title = document.createElement('div');
    const window = document.createElement('img');
    poster.src = films[i].poster;
    
    let sinopsis = films[i].description;
    let titulo = films[i].title;
    title.textContent = titulo;
    window.src = 'img/Recurso 9.svg';

    title.classList.add('titleFilm');
    
    backTarget.innerHTML = titulo + '<br>' + sinopsis;
   
    targetBox.classList.add('target-box');
    
    target.classList.add('target');
    window.classList.add('window');
    faceTarget.classList.add('faceTarget');
    backTarget.classList.add('backTarget');
    poster.classList.add('poster');
    
    document.getElementById('root').appendChild(box);
    box.insertAdjacentElement('beforeend',targetBox);
    targetBox.insertAdjacentElement('afterbegin',target);
    targetBox.insertAdjacentElement('afterbegin',window);
    
    target.insertAdjacentElement('afterbegin',backTarget);
    target.insertAdjacentElement('afterbegin',faceTarget);
    
    faceTarget.insertAdjacentElement('afterbegin',poster);
    backTarget.insertAdjacentElement('beforebegin',title);
    
    
    i++;
    }
    return box;
}
let container=showFilms(data.films);

let cont=0;
const sortTitle = document.getElementById('alfabeticamente');
sortTitle.addEventListener('click',()=>{
    if(cont==0)
    {
        container.style.display='none';
        let Films = sortAZFilms(data,container);
        showFilms(Films);
    }
    cont++;
})










