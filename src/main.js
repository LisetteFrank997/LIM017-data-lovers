import {showMovies } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
let i=0;
console.log(data.films);

while(i<data.films.length)
{
const targetBox=document.createElement('div');
const target = document.createElement('div');
const faceTarget = document.createElement('div');
const poster = document.createElement('img');
const backTarget= document.createElement('div');
const title = document.createElement('div');

poster.src = showMovies(data.films[i].poster);

let sinopsis = showMovies(data.films[i].description);
let titulo = showMovies(data.films[i].title);
title.textContent = titulo;

backTarget.innerHTML = sinopsis;

title.classList.add('titleFilm');
targetBox.classList.add('target-box');
target.classList.add('target');
faceTarget.classList.add('faceTarget');
backTarget.classList.add('backTarget');
poster.classList.add('poster');

document.getElementById('root').appendChild(targetBox);
targetBox.insertAdjacentElement('afterbegin',target);

target.insertAdjacentElement('afterbegin',backTarget);
target.insertAdjacentElement('afterbegin',faceTarget);

faceTarget.insertAdjacentElement('afterbegin',poster);
backTarget.insertAdjacentElement('beforebegin',title);


i++;
}

