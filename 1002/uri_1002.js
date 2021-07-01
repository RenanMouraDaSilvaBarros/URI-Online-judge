let input = require("fs").readFileSync("stdin", "utf-8")
let R = parseFloat(input)
let Area = 3.14159 * R*R
console.log("A=" + Area.toFixed(4))
