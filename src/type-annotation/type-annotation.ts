/* eslint-disable */
// Tipos básicos, primitivos (here occurs the type inference)
let myName: string = 'Chiu'; // Qualquer tipo de strings: '' "" ``
let myAge: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let isAdult: boolean = true; // true ou false
let symbol: symbol = Symbol('any-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let numbersArray: Array<number> = [1, 2, 3]; // or let numbersArray: number[] = [1, 2, 3];
let stringsArray: Array<string> = ['a', 'b', 'c']; // or let stringsArray: string[] = ['a', 'b', 'c'];

//Objects
let person1: { name: string; age: number; adult?: boolean } = {
  // adult is optional to fill
  age: 30,
  name: 'Chiu',
};

type Person = {
  // type is a new way to define types
  name: string;
  age: number;
  adult?: boolean;
};

let person2: Person = {
  // for own types, we write the first letter in uppercase
  age: 30,
  name: 'Chiu',
};

// Functions
function sum(x: number, y: number): number {
  return x + y;
}

let sum2: (x: number, y: number) => number = (x, y) => x + y; // another way to write functions

// all after : means the type a value
// void is an absence of return
