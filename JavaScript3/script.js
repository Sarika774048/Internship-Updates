// 1️⃣ Find Largest Number in an Array

let numbers = [45, 12, 89, 32, 67];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number:", largest);


// 2️⃣ Check Prime Number

function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log("Is 17 prime?", isPrime(17));


// 3️⃣ Count Vowels in a String

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log("Vowel count:", countVowels("Full Stack Developer"));


// 4️⃣ Remove Duplicates from Array

let duplicateArray = [1, 2, 3, 2, 4, 1, 5];

let uniqueArray = [...new Set(duplicateArray)];

console.log("Array without duplicates:", uniqueArray);


// 5️⃣ Sort an Array (Ascending Order)

let unsorted = [9, 3, 7, 1, 5];

let sorted = unsorted.sort((a, b) => a - b);

console.log("Sorted Array:", sorted);


// 6️⃣ Callback Function Example

function greet(name, callback) {
    console.log("Hi " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Rahul", sayBye);


// 7️⃣ Promise Example

function fetchData() {
    return new Promise((resolve, reject) => {
        let success = true;

        if (success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error fetching data.");
        }
    });
}

fetchData()
    .then(response => console.log(response))
    .catch(error => console.log(error));


// 8️⃣ Async/Await Example

async function getData() {
    try {
        let result = await fetchData();
        console.log("Using async/await:", result);
    } catch (error) {
        console.log(error);
    }
}

getData();


// 9️⃣ Object Destructuring

let employee = {
    empName: "Arjun",
    salary: 50000,
    department: "IT"
};

let { empName, salary } = employee;

console.log("Employee Name:", empName);
console.log("Salary:", salary);


// 🔟 Array Destructuring

let colors = ["Red", "Green", "Blue"];

let [firstColor, secondColor] = colors;

console.log("First Color:", firstColor);
console.log("Second Color:", secondColor);


// 1️⃣1️⃣ Rest Operator

function sumAll(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}

console.log("Sum using rest operator:", sumAll(10, 20, 30, 40));


// 1️⃣2️⃣ Local Storage Example (Browser Only)

/*
localStorage.setItem("username", "Rahul");
let storedUser = localStorage.getItem("username");
console.log("Stored User:", storedUser);
*/


// 1️⃣3️⃣ Simple Class Example

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, I am ${this.name} and I am ${this.age} years old.`;
    }
}

let person1 = new Person("Sneha", 23);
console.log(person1.introduce());


