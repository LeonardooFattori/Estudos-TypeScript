// Tipos Básicos
let age: number = 19;
const fistName: string = 'Leonardo';
const isValid: boolean = true;
let idk: any = 5;

idk = "12";
idk = true;

const ids: number[] = [1,2,3,4,5];
const booleans: boolean[] = [true,false,true,false];
const names: string[] = ["Leonardo","João"];

// Tupla
const person: [number,string] = [1,"João"];

// Lista de Tuplas
const peoples: [number,string][] = [
    [1,"Leonardo"],
    [2,"João"]
];

// Intersections
const productId: string | number | boolean = false;

// Enum
enum Direction{
    Up = 1,
    Down = 2,
    Left = "Esquerda",
}

const direction = Direction.Up;

// Typer Assertions
const productName: any = "Boné";

// let itemId = productName as string;
let itemId = <string>productName;

console.log(direction);