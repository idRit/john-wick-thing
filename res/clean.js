const fs = require("fs");
const getUnique = require('../util/unique');
const readCSV = require('../util/readCSV');

async function run() {
   let allCols = await readCSV('./John Wick.csv');
   let heads = allCols.shift().split(',')
   heads.shift();
   heads.splice(1, 1);
   allCols.shift();
   let data = allCols, cleaneData = [];
   for (let i = 0; i < data.length; i++) {
      let el = data[i];

      let x = el.split(',');
      if (!x.includes('')) {
         let timeRatio = x[1] / 118 < 0.5 ? "firstHalf" : "secondHalf";
         // console.log(timeRatio);
         x[1] = timeRatio;
         cleaneData.push(x);
      }
   }
   cleaneData = getUnique(cleaneData);

   cleaneData.forEach(el => {
      el.shift();
      el.splice(1, 1);
      el.reverse();
   });

   heads.reverse();

   // console.log(cleaneData);
   // console.log(heads);

   let finalString = '';
   heads.forEach(el => {
      finalString += el + ',';
   });
   finalString = finalString.substring(0, finalString.length - 1);
   finalString += '\n';
   // console.log(finalString);

   let tempData = [];
   cleaneData.forEach(el => {
      let tempstr = '';
      el.forEach(ele => {
         tempstr += ele + ','
      });
      tempstr = tempstr.substring(0, tempstr.length - 1);
      tempstr += '\n';
      tempData.push(tempstr);
      // finalString += tempstr;
   });

   // console.log(getUnique(tempData));

   getUnique(tempData).forEach(el => {
      finalString += el;
   });

   finalString = finalString.substring(0, finalString.length - 1);

   console.log(finalString);

   fs.writeFileSync('kills.csv', finalString);
}

//run();
