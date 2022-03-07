import {sortAZFilms, anotherExample } from '../src/data.js';


describe('sortAZFilms', () => {
  
  it('debería retornar un array de objetos de peliculas ordenados', () => {
    expect(sortAZFilms()).toBe('example');
  });
});

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
