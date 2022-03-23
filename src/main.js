import {sortData, filterData, computeStats} from './data.js';
import data from './data/ghibli/ghibli.js';

const films=data.films;
let containerSliders=`<div class='containerFilms'>`;
let i=1;

// eslint-disable-next-line no-unused-vars
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
        if(back2=='name')
        {
            backTarget.innerHTML = `<table>
                                        <tr><th>${titulo}</th><tr>
                                        <tr>
                                            <td>Género:</td>
                                            <td>${contentGhibli[i].gender}</td>
                                        </tr>
                                        <tr>
                                            <td>Años:  </td>
                                            <td>${contentGhibli[i].age} </td>
                                        </tr>
                                        <tr>
                                        <td> Color de ojos: </td>
                                        <td> ${contentGhibli[i].eye_color} </td>
                                    </tr>
                                    <tr>
                                    <td>Color de cabello: </td>
                                    <td> ${contentGhibli[i].hair_color}</td>
                                </tr>
                                <tr>
                                <td>Especie: </td>
                                <td> ${contentGhibli[i].specie}</td>
                            </tr>
                                    </table>
                                    `
                                    poster.classList.add('imgCharacters');
        }
        else
        {
            backTarget.innerHTML = `<div class='titleTarget'>${titulo}</div>` +  `<div class='back1Target'>${back1}: </div>` + description;
            poster.classList.add('poster');
        }
       

        targetBox.classList.add('target-box');

        target.classList.add('target');
        window.classList.add('window');
        faceTarget.classList.add('faceTarget');
        backTarget.classList.add('backTarget');
       

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
//const options = document.getElementById('options');
//const options2 = document.getElementById('options2');
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
//const btnsub1Filter2= document.getElementById('sub1BtnFilter2');
//const btnsub2Filter2= document.getElementById('sub2BtnFilter2');

const btnCharacter = document.getElementById('btnCharacter'); 
const main=document.querySelector('main');
const SortFilter=document.getElementById('SortFilter');
let titleFilm = `<img id="home" src="img/home.png" alt="home" class="homeIcon"><h2 class='titles'>Conoce todas las peliculas de Studio Ghibli</h2>`;
btnFilm.addEventListener('click',()=>{

   main.style.display='none';
    divRoot.innerHTML = '';
    
    boxSpecies.innerHTML = '';
  
    divRoot.innerHTML=titleFilm;
    divRoot.style.display='flex';
    divRoot.style.justifyContent ='center';
    divRoot.style.flexWrap = 'wrap';
    divRoot.style.display='flex';
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

    let btnHome = document.getElementById('home');

    const SECOND_PAGE = document.getElementById('secondPage')
    btnHome.addEventListener('click',() =>{
        
        main.style.display='grid';
        divRoot.innerHTML = '';
        SECOND_PAGE.style.display = 'none';
  
        
    }
        
    )
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
                divRoot.insertAdjacentHTML("afterbegin",titleFilm);
                break;
            }
        case 'nameAsc':
            {
                let ascNames = sortData(people,'name','asc');
                
                show(ascNames,'img','name','specie');
                divRoot.insertAdjacentHTML("afterbegin",titleCharacter);
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
            divRoot.insertAdjacentHTML("afterbegin",titleFilm);
                 break;
             }
         case 'nameDesc':
             {
                 let descNames = sortData(people,'name','desc');
                 
               show(descNames,'img','name','specie');
                divRoot.insertAdjacentHTML("afterbegin",titleCharacter);
                 break;
             }
     }
 })

btnsort2Desc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    divRoot.innerHTML=titleFilm;
    divRoot.insertAdjacentHTML("afterbegin",titleFilm);
    show(sortData(films,'rt_score','desc'),'poster','rt_score','title');
})

btnsort2Asc.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    divRoot.insertAdjacentHTML("afterbegin",titleFilm);
    show(sortData(films,'rt_score','asc'),'poster','rt_score','title');
})

btnsort3Asc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    divRoot.insertAdjacentHTML("afterbegin",titleFilm);
    show(sortData(films,'release_date','asc'),'poster','release_date','title');
})

btnsort3Desc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    divRoot.insertAdjacentHTML("afterbegin",titleFilm);
    show(sortData(films,'release_date','desc'),'poster','release_date','title');
})




btnsort2Desc.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    divRoot.insertAdjacentHTML("afterbegin",titleFilm);
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

let titleCharacter = `<img src="img/home.png" alt="home" id="home" class="homeIcon"><h2 class='titles'>Conoce a los todos los Personajes de Studio Ghibli</h2>`;
let idFilter = document.getElementById('options2');

btnCharacter.addEventListener('click',()=>{
    main.style.display='none';
    SortFilter.style.display = 'block';
    divRoot.innerHTML = '';
    
    divRoot.insertAdjacentHTML("afterbegin",titleCharacter);
    divRoot.style.display='flex';
    divRoot.style.justifyContent ='center';
    divRoot.style.flexWrap = 'wrap';
    boxSpecies.innerHTML = '';
    let characters=[];
    data.films.forEach(e=>characters.push(e.people));
    show(characters.flat(),'img','gender','name');
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
    let btnHome = document.getElementById('home');

const SECOND_PAGE = document.getElementById('secondPage')
btnHome.addEventListener('click',() =>{
    
    main.style.display='grid';
    divRoot.innerHTML = '';
    SECOND_PAGE.style.display = 'none';
    
    
}
    
)
})
let conditionGender1 = ['gender','Female'];
let btnFemale = document.getElementById('Female');
btnFemale.addEventListener('click', ()=>{
    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionGender1),'img','name','gender');
  
})

btnsub1Filter1.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    divRoot.insertAdjacentHTML("afterbegin",titleFilm);
   show(filterData(data.films,conditionDirector),'poster','title','director');
     
})

let conditionGender2 = ['gender','Male'];
let btnMale= document.getElementById('Male');
btnMale.addEventListener('click', ()=>{
    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionGender2),'img','name','gender');
})

btnsub2Filter1.addEventListener('click', ()=> {
    divRoot.innerHTML ='';
    boxSpecies.innerHTML = '';
    divRoot.insertAdjacentHTML("afterbegin",titleFilm);
    show(filterData(data.films,conditionDirector2),'poster','title','director');
})

let conditionGender3 = ['gender','NA'];
let btnNeutror = document.getElementById('NA')
btnNeutror.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionGender3),'img','name','gender');
})

let conditionSpecies1 = ['specie','Human'];
let btnHuman = document.getElementById('Humans')
btnHuman.addEventListener('click',()=>{
    divRoot.innerHTML=''
    boxSpecies.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionSpecies1),'img','title','specie')
})

let conditionEyesBrown = ['eye_color','Brown'];
let btnEyesBrown =document.getElementById('eyesBrown')
btnEyesBrown.addEventListener('click', ()=>{
    divRoot.innerHTML = '';
    let arr = [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionEyesBrown),'img','name','eye_color');
})

let conditionEyesBlack = ['eye_color','Black'];
let btnEyesBlack =document.getElementById('eyesBlack')
btnEyesBlack.addEventListener('click', ()=>{
    divRoot.innerHTML = '';
    let arr = [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionEyesBlack),'img','name','eye_color');
})

let conditionEyesGreen = ['eye_color','Green'];
let btnEyesGreen =document.getElementById('eyesGreen')
btnEyesGreen.addEventListener('click', ()=>{
    divRoot.innerHTML = '';
    let arr = [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionEyesGreen),'img','name','eye_color');
})

let conditionEyesGrey = ['eye_color','Grey'];
let btnEyesGrey =document.getElementById('eyesGrey')
btnEyesGrey.addEventListener('click', ()=>{
    divRoot.innerHTML = '';
    let arr = [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionEyesGrey),'img','name','eye_color');
})

let conditionEyesDbrown = ['eye_color','Dark Brown'];
let btnEyesDbrown =document.getElementById('eyesDbrown')
btnEyesDbrown.addEventListener('click', ()=>{
    divRoot.innerHTML = '';
    let arr = [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionEyesDbrown),'img','name','eye_color');
})

let conditionEyesBlue = ['eye_color','Blue'];
let btnEyesBlue =document.getElementById('eyesBlue')
btnEyesBlue.addEventListener('click', ()=>{
    divRoot.innerHTML = '';
    let arr = [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionEyesBlue),'img','name','eye_color');
})

let conditionHairBrown = ['hair_color','Brown'];
let btnHairBrown = document.getElementById('hairBrown');
btnHairBrown.addEventListener('click',()=>{
    divRoot.innerHTML=''
    boxSpecies.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionHairBrown),'img','title','hair_color');
})
let conditionHairBlack = ['hair_color','Black'];
let btnHairBlack = document.getElementById('hairBlack');
btnHairBlack.addEventListener('click',()=>{
    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionHairBlack),'img','title','hair_color')
})
let conditionHairBlonde = ['hair_color','Blonde'];
let btnHairBlonde = document.getElementById('hairBlonde');
btnHairBlonde.addEventListener('click',()=>{
    
    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionHairBlonde),'img','title','hair_color')
})
let conditionHairWhite = ['hair_color','White'];
let btnHairWhite = document.getElementById('hairWhite');

btnHairWhite.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionHairWhite),'img','title','hair_color')
})

let conditionHairGrey = ['hair_color','Grey'];
let btnHairGrey = document.getElementById('hairGrey');

btnHairGrey.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionHairGrey),'img','title','hair_color')
})

let conditionHairRed = ['hair_color','Red'];
let btnHairRed = document.getElementById('hairRed');

btnHairRed.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionHairRed),'img','title','hair_color')
})

let conditionHairLightBrown = ['hair_color','Light brown'];
let btnHairLightBrown = document.getElementById('hairLightBrown');

btnHairLightBrown.addEventListener('click',()=>{

    divRoot.innerHTML = '';
    boxSpecies.innerHTML = '';
    let arr= [];
    data.films.forEach(e=>arr.push(e.people));
    show(filterData(arr.flat(),conditionHairLightBrown),'img','title','hair_color')
})

let species=people.map(e=>e.specie);
let arrSpecies = species.reduce((unique,item)=>unique.includes(item)?unique:[...unique,item],[]);
let titleSpecies = "Personajes por Especies";
let html = `<h2>${titleSpecies}</h2>`;
for(const x of arrSpecies){
    html += `<button class='btnSpecie' value='${x}'>${x}</button>`;
}

let btnSpecie = document.getElementById('btnSpecie');
btnSpecie.addEventListener('click',()=>{
    let arrSpecie=people.map(e=>e.specie);
    let objFeatures=computeStats(arrSpecie);
    
    let arrValues=Object.values(objFeatures);
    let arrProperties =Object.keys(objFeatures);
    let arrValuesProperties=[];
    let j=0;
    for (const elemento of arrValues) {
        if(elemento>2)
        {
            arrValuesProperties.push([arrProperties[j],elemento]);
        } 
        j++;
    }
    drawGraphics(arrValuesProperties,'Especies de Studio Ghibli')
})

let boxSpecies=document.getElementById('boxSpecies');
let btnOthers = document.getElementById('Others');

btnOthers.addEventListener("click", ()=> {
    boxSpecies.innerHTML=html;
    divRoot.innerHTML = '';
    divRoot.style.marginTop='133px';
    let btns = document.getElementsByClassName('btnSpecie');

    for (let i = 0; i < btns.length; i++) {
    
        btns[i].addEventListener("click", ()=>{
        let condition=['specie',btns[i].value];
        let arr=filterData(people,condition);
        divRoot.innerHTML = '';
        show(arr,'img','name','specie');
        });
    }
})

const BTN_COMPUTE = document.getElementById('btnFilterCompute');
let computeContainer = document.getElementById('computeContainer');
BTN_COMPUTE.addEventListener('click',()=>{
  
    main.style.display='none';
    divRoot.innerHTML = '';
    divRoot.style.background='#449ed1';
    //SECOND_PAGE.style.display = 'block'
    boxSpecies.innerHTML = '';
    computeContainer.style.display = 'flex';
    computeContainer.insertAdjacentHTML("afterbegin",`<img id="home" src="img/home.png" alt="home"  class="homeCompute">`);

    let arr1BtnFeatures = document.getElementsByClassName('btnCompute');
    let arrValues1=[];
    for (let i = 0; i < arr1BtnFeatures.length; i++) 
    {
        arr1BtnFeatures[i].addEventListener('mouseover',()=>{
            arrValues1.push(arr1BtnFeatures[i].value);
        })
    }
  
    let arr2BtnFeatures = document.getElementsByClassName('btnFeatures');
    let arrValues2=[];
    for (let i = 0; i < arr2BtnFeatures.length; i++) 
    {
        arr2BtnFeatures[i].addEventListener('click',()=>{
            arrValues2.push(arr2BtnFeatures[i].value);
        })
    }
    let btnHome = document.getElementById('home');

    const SECOND_PAGE = document.getElementById('secondPage')
    btnHome.addEventListener('click',() =>{
        
        main.style.display='grid';
        divRoot.innerHTML = '';
        SECOND_PAGE.style.display = 'none';
  
        
    }
        
    )
})

let btnHairColor = document.getElementById('btnHair');
btnHairColor.addEventListener('click', ()=>{
let arrHairColor=people.map(e=>e.hair_color);
console.log(arrHairColor);
let objFeatures=computeStats(arrHairColor);

let arrValues=Object.values(objFeatures);
let arrProperties =Object.keys(objFeatures);
let arrValuesProperties=[];
let j=0;
for (const elemento of arrValues) {
    if(elemento>5)
    {
        arrValuesProperties.push([arrProperties[j],elemento]);
    } 
    j++;
}
    drawGraphics(arrValuesProperties,'Color de cabello por personaje')
})

let btnEyesColor= document.getElementById('btnEyes');
btnEyesColor.addEventListener('click', ()=>{
    let arrEyesColor=people.map(e=>e.eye_color);
let objFeatures=computeStats(arrEyesColor);
let arrValues=Object.values(objFeatures);
let arrProperties =Object.keys(objFeatures);
let arrValuesProperties=[];
let j=0;
for (const elemento of arrValues) {
    if(elemento>=3)
    {
        arrValuesProperties.push([arrProperties[j],elemento]);
    }
    j++;
}
    drawGraphics(arrValuesProperties,'Color de ojos por personaje')
})

let btnGender= document.getElementById('btnGender');
btnGender.addEventListener('click', ()=>{
    let arrGender=people.map(e=>e.gender);
let objFeatures=computeStats(arrGender);
let arrValues=Object.values(objFeatures);
let arrProperties =Object.keys(objFeatures);
let arrValuesProperties=[];
let j=0;
for (const elemento of arrValues) {
    if(elemento>=2)
    {
        arrValuesProperties.push([arrProperties[j],elemento]);
    }
    j++;
}
    drawGraphics(arrValuesProperties,'Personajes por genero')
})




function drawGraphics(arrStadistic,titleGraphic){
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
  data.addRows(arrStadistic);

  // Set chart options
  var options = {'title':titleGraphic,
                 'width':900,
                 'height':600,
                };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(data, options);}
}


