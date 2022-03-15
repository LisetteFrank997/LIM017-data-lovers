import {sortData, filterData} from './data.js';

import data from './data/ghibli/ghibli.js';

export const show=(contentGhibli,img,back1,back2)=>{
    let i=0;
    const box = document.createElement('section'); 
    box.classList.add('container')
    while(i<contentGhibli.length)
    {
     
    const targetBox=document.createElement('div');
    const target = document.createElement('div');
    const faceTarget = document.createElement('div');
    const poster = document.createElement('img');
    const backTarget= document.createElement('div');
    const title = document.createElement('div');
    const window = document.createElement('img');
    
    poster.src = contentGhibli[i][img];
    
    let description = contentGhibli[i][back1];
    let titulo = contentGhibli[i][back2];
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
let btnFilm = document.getElementById('btnFilm');
const options = document.getElementById('options');
//const btnSort = document.getElementById('btnSort');
const btnSort1 = document.getElementById('btnSort1');
const btnsort1Asc = document.getElementById('sub1BtnSort1');
const btnsort1Desc = document.getElementById('sub2BtnSort1');
const btnSort3 = document.getElementById('btnSort3');
const btnsort3Asc = document.getElementById('sub1BtnSort3')
const btnsort3Desc= document.getElementById('sub2BtnSort3')
const btnSort2 = document.getElementById('btnSort2');
const btnsort2Asc = document.getElementById('sub1BtnSort2');
const btnsort2Desc = document.getElementById('sub2BtnSort2');
const btnFilter1 = document.getElementById('btnFilter1');
const btnsub1Filter1 = document.getElementById('sub1BtnFilter1');
const btnsub2Filter1 = document.getElementById('sub2BtnFilter1');
const btnsub3Filter1 = document.getElementById('sub3BtnFilter1');
const btnFilter2 = document.getElementById('btnFilter2');
const btnsub1Filter2= document.getElementById('sub1BtnFilter2');
const btnsub2Filter2= document.getElementById('sub2BtnFilter2');

const btnCharacter = document.getElementById('btnCharacter'); 


btnFilm.addEventListener('click',()=>{
    divRoot.innerHTML = '';
   
    show(data.films,'poster','description','title');
    btnSort1.innerText='Por titulos';
    btnsort1Asc.innerText = 'A-Z';
    btnsort1Asc.value = 'titleAsc';
    btnsort1Desc.innerText = 'Z-A';
    btnsort1Desc.value = 'titleDesc';
    btnSort2.innerText = 'Popularidad';
    btnsort2Asc.innerText = '+ popular';
    btnsort2Desc.innerText = '- popular';
    btnSort3.innerText = 'Por estreno';
    btnsort3Asc.innerText='Newer';
    btnsort3Desc.innerText='Older';
    btnFilter1.innerText = 'Por director';
    btnsub1Filter1.innerText = 'Hayao Miyazaki';
    btnsub2Filter1.innerText = 'Isao Takahata';
    btnsub3Filter1.style.display = 'none'
})


const films=data.films;
const people=films.map(e=>e.people).flat();

btnsort1Asc.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    switch(btnsort1Asc.value)
    {
        case 'titleAsc':
            {   let ascFilms = sortData(films,'title','asc');
                console.log(ascFilms);
            show(ascFilms,'poster','description','title');
                
                break;
            }
        case 'nameAsc':
            {

                let ascNames = sortData(people,'name','asc');
                console.log(ascNames);
            show(ascNames,'img','name','specie');
                break;
            }
    }


})
btnsort1Desc.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    switch(btnsort1Desc.value)
     {
         case 'titleDesc':
             {   
                 let descFilms = sortData(films,'title','desc');
             show(descFilms,'poster','description','title');
                 
                 break;
             }
         case 'nameDesc':
             {
                 let descNames = sortData(people,'name','desc');
             show(descNames,'img','name','specie');
                 break;
             }
     }
 })

btnsort2Desc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    show(sortData(films,'rt_score','desc'),'poster','rt_score','title');
})

btnsort2Asc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    show(sortData(films,'rt_score','asc'),'poster','rt_score','title');
})

btnsort3Asc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    show(sortData(films,'release_date','asc'),'poster','release_date','title');
})

btnsort3Desc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    show(sortData(films,'release_date','desc'),'poster','release_date','title');
})








window.addEventListener("load",()=>{
    options.style.display = 'block';
    btnFilter2.style.display= 'none';
    show(data.films,'poster','description','title');
    btnSort1.innerText='Por titulos';
    btnsort1Asc.innerText = 'A-Z';
    btnsort1Desc.innerText = 'Z-A';
    btnsort1Desc.value = 'titleDesc';
    btnSort2.innerText = 'Popularidad';
    btnsort2Asc.innerText = '+ popular';
    btnsort2Desc.innerText = '- popular';
    btnSort3.innerText = 'Por estreno';
    btnsort3Asc.innerText='Newer';
    btnsort3Desc.innerText='Older';
    btnFilter1.innerText = 'Por director';
    btnsub1Filter1.value = 'Hayao Miyazaki';
    btnsub1Filter1.innerText = 'Hayao Miyazaki';
    btnsub2Filter1.innerText = 'Isao Takahata';
    btnsub2Filter1.value = 'Isao Takahata';
    btnsub3Filter1.style.display = 'none'
})
let conditionDirector = ['director','Hayao Miyazaki'];
let conditionDirector2 = ['director','Isao Takahata'];



btnCharacter.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    let characters=[];
    data.films.forEach(e=>characters.push(e.people));
    
    show(characters.flat(),'img','name','gender');
    btnSort1.innerText='Por nombres';
    btnsort1Asc.innerText = 'A-Z';
    btnsort1Asc.value = 'nameAsc';
    btnsort1Desc.innerText = 'Z-A';
    btnsort1Desc.value = 'nameDesc';
    btnSort2.innerText = 'Por edad';
    btnsort2Asc.innerText = '< mayores';
    btnsort2Desc.innerText = '> menores';
    btnSort3.style.display = 'none';
    btnFilter1.innerText= 'Por genero';
    btnsub1Filter1.value= 'Femenino';
    btnsub1Filter1.innerText= 'Femenino';
    btnsub2Filter1.innerText= 'Masculino';
    btnsub2Filter1.value= 'Masculino';
    btnsub3Filter1.innerText = 'Neutro';
    btnFilter2.style.display='block';
    btnFilter2.innerText= 'Por especie';
    btnsub1Filter2.innerText= 'Humanos';
    btnsub2Filter2.innerText= 'Otros';
})
let conditionGender1 = ['gender','Female'];
btnsub1Filter1.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    
    switch(btnsub1Filter1.getAttribute('value'))
    {
        case 'Femenino':
            {
                let arr= [];
                data.films.forEach(e=>arr.push(e.people));
        
            show(filterData(arr.flat(),conditionGender1),'img','name','gender');
            break;}
        case 'Hayao Miyazaki':
            {   
                show(filterData(data.films,conditionDirector),'poster','title','director');
                break;
            }
    }
})
let conditionGender2 = ['gender','Male'];
btnsub2Filter1.addEventListener('click', ()=> {
    divRoot.innerHTML ='';
    switch(btnsub2Filter1.getAttribute('value'))
    {
        case 'Masculino':
            {
                let arr= [];
                data.films.forEach(e=>arr.push(e.people));
        
            show(filterData(arr.flat(),conditionGender2),'img','name','gender');
            break;}
        case 'Isao Takahata':
            {   
                show(filterData(data.films,conditionDirector2),'poster','title','director')
                break;
            }
    }
   
})
let conditionGender3 = ['gender','NA'];
btnsub3Filter1.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionGender3),'img','name','gender');
})
let conditionSpecies1 = ['specie','Human'];
btnsub1Filter2.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionSpecies1),'img','title','specie')
})

btnsub2Filter2.addEventListener('click', ()=> {
    divRoot.innerHTML ='';
    show(filterData(data,conditionDirector2),'img','title','director')
})
