/* eslint-disable prettier/prettier */
/* Dog years:
  * 15 years for first human year
  * additional 9 years for human year 2
  * additional 5 years for every human year after

   Cat years:
  * 15 years for first human year
  * additional 9 years for human year 2
  * additional 4 years for every human year after
*/
const humanCatDogYears = humanYears => {
    let dogYears, catYears;
    if(humanYears <= 0){
      return [0,0,0];
    }
  
    if(humanYears === 1){
      catYears = 15;
      dogYears = 15;
    }
  
    if(humanYears === 2){
      catYears = 15 + 9;
      dogYears = 15 + 9;
    }
  
    if(humanYears > 2){
      catYears = (16) + (4 * humanYears);
      dogYears = (18) + (5 * humanYears);
    }
    return [humanYears, catYears, dogYears];
  };
  console.log(humanCatDogYears(2));
module.exports = humanCatDogYears;
