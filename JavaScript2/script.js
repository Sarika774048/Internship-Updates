let temperature = 32;

if (temperature > 35) {
    console.log("It is very hot today.");
} else if (temperature >= 20 && temperature <= 35) {
    console.log("The weather is pleasant.");
} else {
    console.log("It is cold today.");
}


console.log("\nFor Loop:");
for (let i = 10; i >= 1; i--) {
    console.log("Countdown:", i);
}


console.log("\nWhile Loop:");
let number = 1;
while (number <= 5) {
    console.log("Square of", number, "is", number * number);
    number++;
}


console.log("\nDo-While Loop:");
let value = 5;
do {
    console.log("Value is:", value);
    value--;
} while (value > 0);


function calculateArea(length, width) {
    return length * width;
}

console.log("\nArea of Rectangle:", calculateArea(8, 4));


function checkGrade(marks) {
    if (marks >= 90) {
        return "Grade A";
    } else if (marks >= 75) {
        return "Grade B";
    } else if (marks >= 50) {
        return "Grade C";
    } else {
        return "Fail";
    }
}

console.log("Result:", checkGrade(82));


const findLargest = (a, b, c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
};

console.log("Largest Number:", findLargest(45, 67, 32));


function printMultiples(n) {
    for (let i = 1; i <= 5; i++) {
        console.log(n, "x", i, "=", n * i);
    }
}

console.log("\nMultiplication Table of 3:");
printMultiples(3);
