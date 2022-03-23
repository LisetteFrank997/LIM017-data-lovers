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
     
      return arr;
};

export const computeStats=(dataFeatures)=>{
  

let countedNames = dataFeatures.reduce(function (allFeatures, feature) {
  if (feature in allFeatures) {
    allFeatures[feature]++
  }
  else {
    allFeatures[feature] = 1
  }
  return allFeatures
}, {})
return countedNames;

 
};

