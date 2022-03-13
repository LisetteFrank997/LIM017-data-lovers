import { it } from 'eslint/lib/rule-tester/rule-tester';
import {sortData } from '../src/data.js';


describe('sortData', () => {
  
  it('debería retornar un array de objetos de peliculas ordenados ascendentemente', () => {
    let sortAsc = sortData(FILMS,'title','asc');
      expect(sortAsc).toEqual(RESULT_ASC);
  });
  it('deberia retornar un array de objetos de peliculas ordenados ascendentemente',()=>{
    let sortDesc = sortData(FILMS,'title','desc');
      expect(sortDesc).toEqual(RESULT_DESC);
  });

});
/** 
describe('anotherExample', () => {
  
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});**/
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
const RESULT_ASC = [ {
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
const RESULT_DESC = FILMS.sort((a, b) => (a.title < b.title) ? 1 : -1);