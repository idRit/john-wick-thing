const fs = require("fs");

async function readCSV(path) {
    let fileContent = fs.readFileSync(path);
    fileContent = fileContent.toString().split('\r\n');
    // console.log(fileContent);
    return fileContent;
}

module.exports = async (path) => {
    return await readCSV(path);
}