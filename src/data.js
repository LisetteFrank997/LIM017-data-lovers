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
        return (parseInt(a[sortBy]) > parseInt(b[sortBy]) ? 1 : -1);
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
        return (parseInt(a[sortBy]) < parseInt(b[sortBy]) ? 1 : -1);
      }
    }
    );
  }
    
};

export const filterData=(data,condition)=>{
   
      let arr=data.filter(elem=>elem[condition[0]] == condition[1]);
      console.log(arr)
      return arr;
};

export const computeStats=(data,arrCondition)=>{

  let firstCondition=filterData(data,arrCondition[0]);
  let secondCondition=filterData(firstCondition,arrCondition[1]);
  let thirdCondition = filterData(secondCondition,arrCondition[2]);
  let fourthCondition=filterData(thirdCondition,arrCondition[3]);
  console.log('filtro de condiciones:',fourthCondition);
  return fourthCondition;
};

