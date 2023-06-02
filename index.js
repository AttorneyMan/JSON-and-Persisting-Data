const { randomFakeProduct } = require("./products");

 const {randomFakeProduct} = require('./products')

const { writeJsonFile , readJsonFile } = require("./helper.js")
// console.log("-_-");

function run(){
console.log("Be The Apps", randomFakeProduct())

let productsData = readJsonFile( "./data" , "products.json" )

productsData.push( randomFakeProduct() )

writeJsonFile( "./data" , "products.json" , productsData)

}

run();