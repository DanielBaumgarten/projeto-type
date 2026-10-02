import ast = require("typescript/unstable/ast");

interface IAdress{
    street: string;
    number: number;
    city: string;
    zip?: string;
}

interface IUser{
    readonly id: number;
    name: string;
    email: string;
    address: IAdress;
}

const student: IUser ={
    id: 1001,
    name: "Ana", 
    email: "ana@me.com",
    address: {
        street: "Flores",
        number: 123, 
        city: "Porto Alegre",
        zip: "789456132"
    }
};

console.log(student);

interface IStudent extends IUser{
    registration: string;
    year: number;

}

const student2: IStudent = {
    id: 1002,
    name: "Maria",
    email: "maria@me.com",
    registration: "966958472",
    year: 2,
    address: {
        street: "Pinhal",
        number: 12,
        city: "Palhoça"
    }
}

console.log(student2);