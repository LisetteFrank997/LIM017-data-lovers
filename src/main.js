import {sortData, filterData} from './data.js';

import data from './data/ghibli/ghibli.js';
//let data2 = {...data};
export const show=(films,img,back1,back2)=>{
    let i=0;
    const box = document.createElement('section'); 
    box.classList.add('container')
    while(i<films.length)
    {
     
    const targetBox=document.createElement('div');
    const target = document.createElement('div');
    const faceTarget = document.createElement('div');
    const poster = document.createElement('img');
    const backTarget= document.createElement('div');
    const title = document.createElement('div');
    const window = document.createElement('img');
    
    poster.src = films[i][img];
    
    let description = films[i][back1];
    let titulo = films[i][back2];
    title.textContent = titulo;
    window.src = 'img/pink.svg';
  
    title.classList.add('titleFilm');
    
    backTarget.innerHTML = titulo + '<br>' + 'score: ' + description;
   
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

const divRoot = document.getElementById('root');
const sortTitleAsc = document.getElementById('moviesChooseAsc');

sortTitleAsc.addEventListener('click',()=>{
   divRoot.innerHTML = '';
   show(sortData(data,'title','asc'),'poster','description','title');
})

const sortScoreAsc = document.getElementById('movieScoreAsc');
sortScoreAsc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    show(sortData(data,parseInt('rt_score'),'asc'));
})

const sortTitleDesc = document.getElementById('moviesChooseDesc');

sortTitleDesc.addEventListener('click',()=>{
   divRoot.innerHTML = '';
   show(sortData(data,'title','desc'),'poster','description','title');
})

const sortScoreDesc = document.getElementById('movieScoreDesc');
sortScoreDesc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    show(sortData(data,parseInt('rt_score'),'desc'),'poster','description','title');
})


let filtrar = document.getElementById('filtrar');
filtrar.addEventListener('click',()=>{
    show(filterData(data,'Female'),'img','name','gender')
})
