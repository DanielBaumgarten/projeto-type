let isActive: boolean =true;
let age: number = 19;
let price: number = 13.99;
let product: string = "pastel";

let phrase: string = `Olá, o valor do produto ${product} é R$ ${price}`;

console.log(phrase);

function greeting(name: string): string{
    return `Olá ${name}!`;
}

console.log(greeting("Ana"));

function currencyFormatter(value: number, prefix: string = "R$"): string{

    return `${prefix} ${value.toFixed(2)}`;

}

console.log(currencyFormatter(199.9));
console.log(currencyFormatter(199.922, "$"));