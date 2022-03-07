import {showMovies } from './data.js';

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
    
    poster.src = showMovies(films[i].poster);
    
    let sinopsis = showMovies(films[i].description);
    let titulo = showMovies(films[i].title);
    title.textContent = titulo;

    title.classList.add('titleFilm');
    
    backTarget.innerHTML = titulo + '<br>' + sinopsis;
   
    targetBox.classList.add('target-box');
    target.classList.add('target');
    faceTarget.classList.add('faceTarget');
    backTarget.classList.add('backTarget');
    poster.classList.add('poster');
    
    document.getElementById('root').appendChild(box);
    box.insertAdjacentElement('beforeend',targetBox);
    targetBox.insertAdjacentElement('afterbegin',target);
    
    target.insertAdjacentElement('afterbegin',backTarget);
    target.insertAdjacentElement('afterbegin',faceTarget);
    
    faceTarget.insertAdjacentElement('afterbegin',poster);
    backTarget.insertAdjacentElement('beforebegin',title);
    
    
    i++;
    }
    return box;
}

let container=showFilms(data.films);
let cont = 0;


function sort() {
    let sortFilms = data.films;
    sortFilms=sortFilms.sort((a, b) => (a.title > b.title) ? 1 : -1);
    let allSortFilms= showFilms(sortFilms);
    container.classList.add('invisible');
    sortTitle.removeEventListener('click', sort)
}
const sortTitle = document.getElementById('moviesChoose');
sortTitle.addEventListener('click', sort);


function score() {
    
    let scoreFilms= data.films;
    scoreFilms= scoreFilms.sort((a,b) => (parseInt(a.rt_score) < parseInt(b.rt_score)) ? 1 : -1);
    let allScoreFilms= showFilms(scoreFilms);
    container.classList.add('invisible');
    scorMovie.removeEventListener('click', score);
}
const scorMovie =document.getElementById('movieScor');
scorMovie.addEventListener('click', score);

 
let start= document.getElementById('buttonO');
start.addEventListener("click", ()=>{

    let seeOpcionsF = document.querySelector('.button').style.display;
    if (seeOpcionsF == "none"){
       document.querySelector('.button').style.display = "block";
    }
})












