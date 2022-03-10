// estas funciones son de ejemplo

export const sortData=(data,sortBy,sortOrder)=>{
  let sortFilms = data.films;
  if(sortOrder=='asc')
   return sortFilms.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  else if(sortOrder=='desc')
    return sortFilms.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1));
};

export const filterData=(data,condition)=>{
       
      let arr=[];

      data.films.forEach((film)=>{
              arr.push(film.people.filter(e=>e.gender == condition));
      })

      let arr2=arr.flat();
      
      return arr2;
};


