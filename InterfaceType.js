"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ast = require("typescript/unstable/ast");
const student = {
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
const student2 = {
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
};
console.log(student2);
//# sourceMappingURL=InterfaceType.js.map