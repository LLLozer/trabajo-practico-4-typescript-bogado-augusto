// Tipos Fundamentales //
let productName: string = "Slave"
let productPrice: number = 50
console.log(`Product: ${productName}, Price: ${productPrice}`)

// Tipo Unión //
let productId: string|number = "ABC"
productId = 44
console.log(productId)

// Interfaz Básica //
interface Product {
    name: string,
    price: number,
}

let myProduct: Product = {
    name: "Slave",
    price: 50
}

console.log(myProduct)