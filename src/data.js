// estas funciones son de ejemplo

export const sortData=(data,sortBy,sortOrder)=>{
  let sortFilms = data.films;
  if(sortOrder=='asc')
   return sortFilms.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  else if(sortOrder=='desc')
    return sortFilms.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1));
}

export const filterData=(data, condition)=>{
  let caractersGender = data.films;
  condition 
    caractersGender= caractersGender.filter(a => a[condition] == "string");
    return caractersGender;
}

