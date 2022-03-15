// estas funciones son de ejemplo

export const sortData=(data,sortBy,sortOrder)=>{
  let sortFilms = [...data];
  if(sortOrder=='asc')
  { 
    return sortFilms.sort((a, b) => 
    { if(isNaN(parseInt(a[sortBy])))
      {
        return (a[sortBy] > b[sortBy] ? 1 : -1);
      }
      else
      {
        return (parseInt(a[sortBy]) < parseInt(b[sortBy]) ? 1 : -1);
      }
    }
    );

  }

  else if(sortOrder=='desc')
  {
    return sortFilms.sort((a, b) => 
    { if(isNaN(parseInt(a[sortBy])))
      {
        return (a[sortBy] < b[sortBy] ? 1 : -1);
      }
      else
      {
        return (parseInt(a[sortBy]) > parseInt(b[sortBy]) ? 1 : -1);
      }
    }
    );
  }
    
};

export const filterData=(data,condition)=>{
   
      let arr=data.films.filter(film=>film[condition[0]] == condition[1]);
     

      //let arr2=arr.flat();
      console.log(arr);
      return arr;
};

//condition =['director','hayao']
