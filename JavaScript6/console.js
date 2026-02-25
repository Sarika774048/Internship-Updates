

const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function startCalculator() {
    const rl = readline.createInterface({ input, output });

    console.log("\x1b[35m%s\x1b[0m", "--- MODERN CONSOLE CALCULATOR (ASYNC) ---");

    try {
        // Linear input flow using 'await'
        const n1 = await rl.question("Enter first number: ");
        const op = await rl.question("Operation (+, -, *, /): ");
        const n2 = await rl.question("Enter second number: ");

        const num1 = parseFloat(n1);
        const num2 = parseFloat(n2);
        let result;
        let status = "SUCCESS";

        if (isNaN(num1) || isNaN(num2)) {
            status = "ERROR";
            result = "Invalid Numeric Input";
        } else {
            switch (op) {
                case "+": result = num1 + num2; break;
                case "-": result = num1 - num2; break;
                case "*": result = num1 * num2; break;
                case "/": 
                    result = num2 !== 0 ? num1 / num2 : "Infinity"; 
                    if(num2 === 0) status = "WARNING";
                    break;
                default: status = "ERROR"; result = "Unknown Operator";
            }
        }

        console.table([{
            Input: `${num1} ${op} ${num2}`,
            Result: result,
            Status: status,
            Time: new Date().toLocaleTimeString()
        }]);

    } catch (err) {
        console.error("Critical System Error:", err);
    } finally {
        rl.close(); // Ensures the terminal process exits
    }
}

startCalculator();