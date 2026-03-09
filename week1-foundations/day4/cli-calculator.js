function calculate(command, a, b) {
    if (command === "add") return a + b;
    if (command === "subtract") return a - b;
    if (command === "multiply") return a * b;
    if (command === "divide") return a / b;
    if (command === "power") return Math.pow(a, b)
    return "Unknown command"
}

const command = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

const result = calculate(command, num1, num2);

console.log(result);