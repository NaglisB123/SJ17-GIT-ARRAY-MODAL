export function youngWomen(mainArr) {
    const atrinktiObj = mainArr.filter(
      (personObj) => personObj.sex === 'female' && personObj.age < 35
    );
    console.table(atrinktiObj);
    // grazinti
    return atrinktiObj;
  }