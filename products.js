// npm install @faker-js/faker@7 --save-dev

const { faker } = require("@faker-js/faker")

// const (name) = { name: "tone"}

const randomFakeProduct = {

 name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`
}

console.log(randomFakeProduct)

module.exports = {
    randomFakeProduct,
}