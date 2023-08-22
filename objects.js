const product = {
    name: 'Gummy Bears',
    price: 1.99,
}

console.log(product.name);
console.log(product.price);

product.name = 'Gummy Worms';
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);