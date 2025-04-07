"use strict";
// Tipos Básicos
let age = 19;
const fistName = 'Leonardo';
const isValid = true;
let idk = 5;
idk = "12";
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["Leonardo", "João"];
// Tupla
const person = [1, "João"];
// Lista de Tuplas
const peoples = [
    [1, "Leonardo"],
    [2, "João"]
];
// Intersections
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(direction);
