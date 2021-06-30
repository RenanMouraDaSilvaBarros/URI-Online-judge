let input = require("fs").readFileSync("stdin", "utf-8")
let lines = input.split("\n")


let A = parseInt(lines.shift())
let B = parseInt(lines.shift())
let X = A+B
console.log("X = " + X)