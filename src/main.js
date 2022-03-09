import {sortData } from './data.js';

import data from './data/ghibli/ghibli.js';
export const showFilms=(films)=>{
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
    
    let release_date = films[i].release_date;
    let titulo = films[i].title;
    title.textContent = titulo;
    window.src = 'img/pink.svg';
  
    title.classList.add('titleFilm');
    
    backTarget.innerHTML = titulo + '<br>' + release_date;
   
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

    i++;
    }
    return box;
  }


const sortTitle = document.getElementById('moviesChoose');
const divRoot = document.getElementById('root');
sortTitle.addEventListener('click',()=>{
   divRoot.innerHTML = '';
   showFilms(sortData(data,'title','asc'));
})

const sortScore = document.getElementById('movieScor');
sortScore.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    showFilms(sortData(data,parseInt('rt_score'),'asc'));
})



