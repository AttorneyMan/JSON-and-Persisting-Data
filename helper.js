const fs =require("node:fs")

// console.log(fs)

// console.log(Object.keys(fs.readFileSync));
// console.log(Object.keys(fs.writeFileSync))

const path = "./data"
const fileName = "products.json"
const collection = fs.readFileSync( `${path}/${fileName}` , "utf-8" ) 

BLACCK = collection ? JSON.parse(collection) : [];

console.log( BLACCK)

function readJsonFile(path, fileName){
    
    const collection = fs.readFileSync( `${path}/${fileName}` , "utf-8" ) 
    
    return collection ? JSON.parse(collection) : [];
}


function writeJsonFile(path,fileName,data){
    
    data = JSON.stringify(data)
    
    fs.writeFileSync( `${path}/${fileName} `, data , { encoding: "utf-8"} )

}

module.exports = {
    readJsonFile,
    writeJsonFile,
};