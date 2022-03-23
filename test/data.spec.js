import { it } from 'eslint/lib/rule-tester/rule-tester';
import {filterData, sortData,computeStats } from '../src/data.js';


describe('sortData', () => {
  
  it('debería retornar un array de objetos de peliculas ordenados por su titulo ascendente', () => {
    let sortAsc = sortData(FILMS,'title','asc');
      expect(sortAsc).toEqual(RESULT_TITLE_ASC);
  });
  it('deberia retornar un array de objetos de peliculas ordenados por su titulo descendente',()=>{
    let sortDesc = sortData(FILMS,'title','desc');
      expect(sortDesc).toEqual(RESULT_TITLE_DESC);
  });
  it('debería retornar un array de objetos de peliculas ordenados por su año de estreno ascendente', () => {
    let sortAsc = sortData(FILMS,'release_date','asc');
      expect(sortAsc).toEqual(RESULT_DATE_ASC);
  });
  it('deberia retornar un array de objetos de peliculas ordenados por su año de estreno descendente',()=>{
    let sortDesc = sortData(FILMS,'release_date','desc');
      expect(sortDesc).toEqual(RESULT_DATE_DESC);
  });

});

describe('filterData', () => {
  
  it('debería retornar un array de objetos de personajes filtrados por genero femenino', () => {
    let condition1= ['gender', 'Female'];
    let filterGender1 = filterData(PEOPLE,condition1);
    expect(filterGender1).toEqual(RESULT_GENDER_FEMALE);
  });

 it ('debería retornar un array de objetos de personajes filtrados por genero masculino', () => {
    let condition2= ['gender', 'Male'];
    let filterGender2 = filterData(PEOPLE,condition2);
     expect(filterGender2).toEqual(RESULT_GENDER_MALE);
   });
});
describe('computeStats', () => {
  
  it('debería retornar un objeto con una propiedad y un valor que no se repiten', () => {
    
    let computeHairColor= computeStats(HAIR_COLOR);
    expect(computeHairColor).toEqual( RESULT_COMPUTE);
  });

});


const HAIR_COLOR=["Brown",
"Black",
"Peach", 
"Brown", 
"White", "None", "Dark brown", "Dark brown", "Light brown", "Reddish brown"
, "None"
, "Orange"
, "Brown"
, "Dark Brown"
, "Light Brown"
, "Dark Brown"
, "Dark Brown"
, "Grey"
, "Brown"
, "Grey"
, "Blue"
, "White"
, "Brown"
, "Brown"
, "Black"
, "Red"
, "Brown"
, "Red"
, "Black"
, "Black"
, "Black"
, "Black"
, "Brown"
, "Black"
, "Brown"
, "Black"
, "Black"]
const RESULT_COMPUTE={
  'Black': 9,
  'Blue': 1,
  'Brown': 9,
  'Dark Brown': 3,
  'Dark brown': 2,
  'Grey': 2,
  'Light Brown': 1,
  'Light brown': 1,
  'None': 2,
  'Orange': 1,
  'Peach': 1,
  'Red': 2,
  'Reddish brown': 1,
  'White': 2
}


const FILMS = [
  {
    "title":"Castle in the Sky",
    'rt_score':"95",
    'release_date':"1986",
  },
  {
    'title':"My Neighbor Totoro",
    'rt_score':"93",
    'release_date':"1988",
  },
  {
    'title':"Kiki's Delivery Service",
    'rt_score':"96",
    'release_date':"1989",
  },
  {
    'title':"Pom Poko",
    'rt_score':"78",
    'release_date':"1994",
  },  
]
const RESULT_TITLE_ASC = [ {
  "title":"Castle in the Sky",
  'rt_score':"95",
  'release_date':"1986",
},
{
  'title':"Kiki's Delivery Service",
  'rt_score':"96",
  'release_date':"1989",
},
{
  'title':"My Neighbor Totoro",
  'rt_score':"93",
  'release_date':"1988",
},
{
  'title':"Pom Poko",
  'rt_score':"78",
  'release_date':"1994",
}
];
const RESULT_TITLE_DESC = [
  {
    'title':"Pom Poko",
    'rt_score':"78",
    'release_date':"1994",
  },

  {
    'title':"My Neighbor Totoro",
    'rt_score':"93",
    'release_date':"1988",
  },
  {
    'title':"Kiki's Delivery Service",
    'rt_score':"96",
    'release_date':"1989",
  },
  {
    "title":"Castle in the Sky",
    'rt_score':"95",
    'release_date':"1986",
  },
]
const RESULT_DATE_ASC = [ {
  "title":"Castle in the Sky",
  'rt_score':"95",
  'release_date':"1986",
},
{
  'title':"My Neighbor Totoro",
  'rt_score':"93",
  'release_date':"1988",

},
{
  'title':"Kiki's Delivery Service",
  'rt_score':"96",
  'release_date':"1989",
},
{
  'title':"Pom Poko",
  'rt_score':"78",
  'release_date':"1994",
}
];
const RESULT_DATE_DESC = [
  {
    'title':"Pom Poko",
    'rt_score':"78",
    'release_date':"1994",
  },
  {
    'title':"Kiki's Delivery Service",
    'rt_score':"96",
    'release_date':"1989",
  },
  {
    'title':"My Neighbor Totoro",
    'rt_score':"93",
    'release_date':"1988",
  },
 
  {
    "title":"Castle in the Sky",
    'rt_score':"95",
    'release_date':"1986",
  },
]
const PEOPLE=[
  {
    "name": "Pazu",
    "gender": "Male",
    "age": "13",
  },
  {
    "name": "Lusheeta Toel Ul Laputa",
    "gender": "Female",
    "age": "13",
  },
  {
    "name": "Satsuki Kusakabe",
    "gender": "Female",
    "age": "11",
  },
  {
    "name": "Kanta Ogaki",
    "gender": "Male",
    "age": "11",
  },
  {
    "name": "Jiji",
    "gender": "Male",
    "age": "13",
  },
  {
    "name": "Osono",
    "gender": "Female",
    "age": "30",
  },
]
const RESULT_GENDER_FEMALE=[

  {
    "name": "Lusheeta Toel Ul Laputa",
    "gender": "Female",
    "age": "13",
  },
  {
    "name": "Satsuki Kusakabe",
    "gender": "Female",
    "age": "11",
  },
  {
    "name": "Osono",
    "gender": "Female",
    "age": "30",
  },
]
const RESULT_GENDER_MALE=[
  {
    "name": "Pazu",
    "gender": "Male",
    "age": "13",
  },
  {
    "name": "Kanta Ogaki",
    "gender": "Male",
    "age": "11",
  },
  {
    "name": "Jiji",
    "gender": "Male",
    "age": "13",
  }
]