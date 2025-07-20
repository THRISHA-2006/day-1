
let numberVal = 100;
let stringVal = "JavaScript";
let booleanVal = true;
let nullVal = null;
let undefinedVal;
let objectVal = { lang: "JS" };
let symbolVal = Symbol("id");

console.log("Type of numberVal:", typeof numberVal);
console.log("Type of stringVal:", typeof stringVal);
console.log("Type of booleanVal:", typeof booleanVal);
console.log("Type of nullVal:", typeof nullVal);        // object (known quirk in JS)
console.log("Type of undefinedVal:", typeof undefinedVal);
console.log("Type of objectVal:", typeof objectVal);
console.log("Type of symbolVal:", typeof symbolVal);

let strNum = "123";
let convertedToNumber = Number(strNum);     
console.log("Converted to Number:", convertedToNumber);

let numberToStr = String(numberVal);        
console.log("Converted to String:", numberToStr);


console.log("Implicit add:", "5" + 2);
console.log("Implicit subtract:", "5" - 2);  
