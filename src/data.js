// estas funciones son de ejemplo

export const sortAZFilms = (data) => {
  
    let sortFilms = data.films;
    sortFilms=sortFilms.sort((a, b) => (a.title > b.title) ? 1 : -1);
    return sortFilms;
       
};

export const anotherExample = () => {
  return 'OMG';
};
