// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

for (let i = 1; i <= 5; i++) {
 console.log(i);
}


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
//console.log(blockVar);
//console.log(blockLet);
}

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    
    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);
    }

let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);


let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

1
console.log("User Category:", userCategory);

(function immediateFunction() {
    var immediateVar = "I'm inside an IIFE";
    console.log(immediateVar);
})();

//console.log(immediateVar); // This will cause an error because immediateVar is not defined outside the IIFE

const button= document.getElementById("myButton");

const outputElement = document.getElementById("output");

button.onclick = function() {
    outputElement.textContent = `
    Global Var: ${globalVar}
    Global Let: ${globalLet}
    Global Const: ${globalConst}
    Block Var: ${blockVar}`; };