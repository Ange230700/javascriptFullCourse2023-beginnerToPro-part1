// const product = {
//     name: 'Gummy Bears',
//     price: 1.99,
// }

// console.log(product.name);
// console.log(product.price);

// product.name = 'Gummy Worms';
// console.log(product);

// product.newProperty = true;
// console.log(product);

// delete product.newProperty;
// console.log(product);

const product2 = {
    name: 'shirt',
    'delivery time': '1 day',
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function function1() {
        console.log('function inside object');
    }
}

console.log(product2);
console.log(product2.name);
console.log(product2['name']);
console.log(product2['delivery time']);

console.log(product2.rating.count);

product2.fun();

console.log(typeof console.log);

console.log(JSON.stringify(product2));

console.log(JSON.parse(`
{"name":"shirt","delivery time":"1 day","rating":{"stars":4.5,"count":87}}
`));

// JSON.stringify(score) => '{"score":1}'
// JSON.parse('{"score":1}') => score object

