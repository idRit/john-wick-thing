function getUnique(array) {
    var uniqueArray = [];
 
    // Loop through array values
    for (i = 0; i < array.length; i++) {
       if (uniqueArray.indexOf(array[i]) === -1) {
          uniqueArray.push(array[i]);
       }
    }
    return uniqueArray;
}

module.exports = (array) => {
    return getUnique(array);
}