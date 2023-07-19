export function printMen(arr) {
    // 1. Naudojant array.prototype.forEach atspausdinti visus vyrus
    arr.forEach((personObj) => {
    //   console.log('personObj.sex ===', personObj.sex);
      // patikrinti ar vyras
      if (personObj.sex === 'male') {
        console.log(personObj); 
      }
      // jei taip, spausdinti
      // jei ne, nieko
    });
    }

    //===============

    export function printDriverGender(arr) {
      // sukti cikla
      arr.forEach((personObj) => {
        // patikrinti ar asmuo vairuoja
        if (personObj.hasCar === true) {
          // jei taip, atspausdinti jo lyti
          console.log(personObj.name, 'vairuoja ===', personObj.sex);
          return personObj.sex;
        }
      });
    }