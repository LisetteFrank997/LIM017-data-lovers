import {sortData, filterData, computeStats} from './data.js';
import data from './data/ghibli/ghibli.js';

const films=data.films;
let containerSliders=`<div class='containerFilms'>`;
let i=1;

for(const e of films){
    if(i==1)
    {
        containerSliders += `<input type='radio' name='slider' id='item-${i}' checked>`;
    }
    else{
        containerSliders += `<input type='radio' name='slider' id='item-${i}'>`;
    }
 
    i++;
}
let cards=`<div class='cards' id='cards'>`;
i=1;
for(const e of films) {
    cards += `<label class='card' for= 'item-${i}' id='movie-${i}'> <img src=${e.poster} class="imgPoster"> </label>`;
    i++;
}
cards+=`</div>`;
containerSliders+=cards + `</div>`;
let carrusel = document.getElementById('carrouselFilms');
carrusel.innerHTML = containerSliders;
const btnForward = document.getElementById('forward');
const btnBack = document.getElementById('back');

btnForward.addEventListener('click',()=>{
    sideScroll(carrusel,'right',100,50,300);
})
btnBack.addEventListener('click',()=>{
    sideScroll(carrusel,'left',100,50,300);
})
function sideScroll(element,direction,speed,distance,step){
    let scrollAmount = 0;
    let slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}


function show(contentGhibli, img, back1, back2) {
    console.log(contentGhibli);
    let i = 0;
    const box = document.createElement('section');
    box.classList.add('container');
    while (i < contentGhibli.length) {

        const targetBox = document.createElement('div');
        const target = document.createElement('div');
        const faceTarget = document.createElement('div');
        const poster = document.createElement('img');
        const backTarget = document.createElement('div');
        const title = document.createElement('div');
        const window = document.createElement('img');

        poster.src = contentGhibli[i][img];

        let description = contentGhibli[i][back1];
        let titulo = contentGhibli[i][back2];
        title.textContent = titulo;
        //window.src = 'img/tarjetaS.svg';
        title.classList.add('titleFilm');

        backTarget.innerHTML = titulo + '<br>' + 'score: ' + description;

        targetBox.classList.add('target-box');

        target.classList.add('target');
        window.classList.add('window');
        faceTarget.classList.add('faceTarget');
        backTarget.classList.add('backTarget');
        poster.classList.add('poster');

        document.getElementById('root').appendChild(box);
        box.insertAdjacentElement('beforeend', targetBox);
        targetBox.insertAdjacentElement('afterbegin', target);


        target.insertAdjacentElement('afterbegin', backTarget);
        target.insertAdjacentElement('afterbegin', faceTarget);

        faceTarget.insertAdjacentElement('afterbegin', poster);

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
const main=document.querySelector('main');
const SortFilter=document.getElementById('SortFilter');
btnFilm.addEventListener('click',()=>{

   main.style.display='none';
    divRoot.innerHTML = '';

    boxSpecies.innerHTML = '';
    let titleFilm = `<div class='titles'>Peliculas</div>
                    <div class='subtitles'>Studio Ghibli</div>`;
    divRoot.innerHTML=titleFilm;
    SortFilter.style.display='block';
    show(data.films,'poster','description','title');
    btnSort1.innerText='Por titulos';
    btnsort1Asc.innerText = 'A-Z';
    btnsort1Asc.value = 'titleAsc';
    btnsort1Desc.innerText = 'Z-A';
    btnsort1Desc.value = 'titleDesc';
    btnSort2.style.display = 'block';
    btnSort2.innerText = 'Popularidad';
    btnsort2Asc.innerText = '- popular';
    btnsort2Asc.value = 'popularAsc';
    btnsort2Desc.innerText = '+ popular';
    btnSort3.style.display = 'block'
    btnSort3.innerText = 'Por estreno';
    btnsort3Asc.innerText='Newer';
    btnsort3Desc.innerText='Older';
    btnFilter1.innerText = 'Por director';
    btnsub1Filter1.innerText = 'Hayao Miyazaki';
    btnsub1Filter1.value = 'Hayao Miyazaki';
    btnsub2Filter1.innerText = 'Isao Takahata';
    btnsub2Filter1.value = 'Isao Takahata';
    btnsub3Filter1.style.display = 'none';
    btnFilter2.style.display = 'none';
})

const people=films.map(e=>e.people).flat();

btnsort1Asc.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    switch(btnsort1Asc.value)
    {
        case 'titleAsc':
            {   let ascFilms = sortData(films,'title','asc');
                
                show(ascFilms,'poster','description','title');
                break;
            }
        case 'nameAsc':
            {
                let ascNames = sortData(people,'name','asc');
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
    boxSpecies.innerHTML = '';
    show(sortData(films,'rt_score','asc'),'poster','rt_score','title');
})

btnsort3Asc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    show(sortData(films,'release_date','asc'),'poster','release_date','title');
})

btnsort3Desc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    show(sortData(films,'release_date','desc'),'poster','release_date','title');
})


btnsort1Desc.addEventListener('click',()=>{
   divRoot.innerHTML = '';
   boxSpecies.innerHTML = '';
   show(sortData(films,'title','desc'),'poster','description','title');
})


btnsort2Desc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    show(sortData(films,'rt_score','desc'),'poster','rt_score','title');
})

/*window.addEventListener("load",()=>{
    options.style.display = 'block';
    btnFilter2.style.display= 'none';
    show(data.films,'poster','description','title');
    btnSort1.innerText='Por titulos';
    btnsort1Asc.innerText = 'A-Z';
    btnsort1Asc.value = 'titleAsc';
    btnsort1Desc.innerText = 'Z-A';
    btnsort1Desc.value = 'titleDesc';
    btnSort2.innerText = 'Popularidad';
    btnsort2Asc.innerText = '- popular';
    btnsort2Desc.innerText = '+ lpopular';
    btnSort3.innerText = 'Por estreno';
    btnsort3Asc.innerText='Newer';
    btnsort3Desc.innerText='Older';
    btnFilter1.innerText = 'Por director';
    btnsub1Filter1.value = 'Hayao Miyazaki';
    btnsub1Filter1.innerText = 'Hayao Miyazaki';
    btnsub2Filter1.innerText = 'Isao Takahata';
    btnsub2Filter1.value = 'Isao Takahata';
    btnsub3Filter1.style.display = 'none'
})*/
let conditionDirector = ['director','Hayao Miyazaki'];
let conditionDirector2 = ['director','Isao Takahata'];


let idFilter = document.getElementById('options2')
btnCharacter.addEventListener('click',()=>{
    main.style.display='none';
    SortFilter.style.display = 'grid';
    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    let characters=[];
    data.films.forEach(e=>characters.push(e.people));
    show(characters.flat(),'img','name','gender');
    btnSort1.innerText='Por nombres';
    btnsort1Asc.innerText = 'A-Z';
    btnsort1Asc.value = 'nameAsc';
    btnsort1Desc.innerText = 'Z-A';
    btnsort1Desc.value = 'nameDesc';
    btnSort2.style.display = 'none';
    btnSort2.innerText = 'Por edad';
    btnsort2Asc.innerText = '< mayores';
    btnsort2Asc.value = 'ageAsc';
    btnsort2Desc.innerText = '> menores';
    btnSort3.style.display = 'none';
    /**btnFilter1.innerText= 'Por genero';
    btnsub1Filter1.value= 'Femenino';
    btnsub1Filter1.innerText= 'Femenino';
    btnsub2Filter1.innerText= 'Masculino';
    btnsub2Filter1.value= 'Masculino';
    btnsub3Filter1.innerText = 'Neutro';
    btnFilter2.style.display='block';
    btnFilter2.innerText= 'Por especie';
    btnsub1Filter2.innerText= 'Humanos';
    btnsub2Filter2.innerText= 'Otros';**/
    idFilter.style.display='none';

})
let conditionGender1 = ['gender','Female'];
btnsub1Filter1.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    switch(btnsub1Filter1.getAttribute('value'))
    {
        case 'Femenino':
            {
                let arr= [];
                data.films.forEach(e=>arr.push(e.people));
                show(filterData(arr.flat(),conditionGender1),'img','name','gender');
                break;
            }
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
    boxSpecies.innerHTML = '';
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
    boxSpecies.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionGender3),'img','name','gender');
})
let conditionSpecies1 = ['specie','Human'];
btnsub1Filter2.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionSpecies1),'img','title','specie')
})
let species=people.map(e=>e.specie);
let arrSpecies = species.reduce((unique,item)=>unique.includes(item)?unique:[...unique,item],[]);

let titleSpecies = "Personajes por Especies";
let html = `<h2>${titleSpecies}</h2>`;
for(const x of arrSpecies){
    html += `<button class='btnSpecie' value='${x}'>${x}</button>`;
}


let boxSpecies=document.getElementById('boxSpecies');

btnsub2Filter2.addEventListener("click", ()=> {
    boxSpecies.innerHTML=html;
    divRoot.innerHTML ='';
    let btns = document.getElementsByClassName('btnSpecie');

    for (let i = 0; i < btns.length; i++) {
    
        btns[i].addEventListener("click", ()=>{
        let condition=['specie',btns[i].value];
        let arr=filterData(people,condition);
        boxSpecies.innerHTML='';
        show(arr,'img','name','specie');
        });
    }
})

const BTN_COMPUTE = document.getElementById('btnCompute');
let computeContainer = document.getElementById('computeContainer');
BTN_COMPUTE.addEventListener('click',()=>{
    main.style.display='none';
    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    computeContainer.style.display = 'flex';

    let arr1BtnFeatures = document.getElementsByClassName('btnCompute');
    let arrValues1=[];
    for (let i = 0; i < arr1BtnFeatures.length; i++) 
    {
        arr1BtnFeatures[i].addEventListener('mouseover',()=>{
            arrValues1.push(arr1BtnFeatures[i].value);
        })
    }
    console.log(arrValues1);
    let arr2BtnFeatures = document.getElementsByClassName('btnFeatures');
    let arrValues2=[];
    for (let i = 0; i < arr2BtnFeatures.length; i++) 
    {
        arr2BtnFeatures[i].addEventListener('click',()=>{
            arrValues2.push(arr2BtnFeatures[i].value);
        })
    }
    console.log(arrValues2);
})



/*global google*/
// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Mushrooms', 2],
    ['Onions', 2],
    ['Olives', 2],
    ['Zucchini', 2],
    ['Pepperoni', 2]
  ]);

  // Set chart options
  var options = {'title':'How Much Pizza I Ate Last Night',
                 'width':400,
                 'height':300};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);}
