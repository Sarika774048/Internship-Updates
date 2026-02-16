

let numbers = [10, 20, 30, 40, 50];

// Accessing elements
console.log("First Element:", numbers[0]);

// Adding element
numbers.push(60);
console.log("After Push:", numbers);

// Removing last element
numbers.pop();
console.log("After Pop:", numbers);


// ================================
// 2️⃣ Common Array Methods
// ================================

// map() – Double each number
let doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter() – Numbers greater than 25
let greaterThan25 = numbers.filter(num => num > 25);
console.log("Greater than 25:", greaterThan25);

// reduce() – Sum of all numbers
let total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Total Sum:", total);

// find() – Find first number greater than 30
let found = numbers.find(num => num > 30);
console.log("First number > 30:", found);

// some() – Check if any number is less than 15
console.log("Any number < 15?", numbers.some(num => num < 15));

// every() – Check if all numbers are positive
console.log("All numbers positive?", numbers.every(num => num > 0));


// ================================
// 3️⃣ Working with Objects
// ================================

let student = {
    name: "Rahul",
    age: 21,
    marks: [85, 90, 78],
    address: {
        city: "Bangalore",
        pincode: 560001
    }
};

// Access properties
console.log("Student Name:", student.name);
console.log("City:", student.address.city);

// Add new property
student.course = "Full Stack Development";
console.log("Updated Student:", student);

// Calculate average marks
let avgMarks = student.marks.reduce((sum, mark) => sum + mark, 0) / student.marks.length;
console.log("Average Marks:", avgMarks);


// ================================
// 4️⃣ Array of Objects Practice
// ================================

let employees = [
    { id: 1, name: "Aman", salary: 40000 },
    { id: 2, name: "Sneha", salary: 55000 },
    { id: 3, name: "Raj", salary: 30000 }
];

// Filter employees with salary > 35000
let highSalary = employees.filter(emp => emp.salary > 35000);
console.log("High Salary Employees:", highSalary);

// Increase salary by 10%
let incrementedSalary = employees.map(emp => {
    return {
        ...emp,
        salary: emp.salary * 1.10
    };
});
console.log("After Increment:", incrementedSalary);

// Find employee by ID
let employee = employees.find(emp => emp.id === 2);
console.log("Employee with ID 2:", employee);


// ================================
// 5️⃣ Problem Solving Practice
// ================================

// Count frequency of elements in array
let arr = [1, 2, 2, 3, 3, 3, 4];

let frequency = {};

for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
}

console.log("Frequency Count:", frequency);


// Find duplicates
let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log("Duplicate Elements:", [...new Set(duplicates)]);


// Convert array to object
let keys = ["name", "age", "course"];
let values = ["Rahul", 21, "MERN"];

let obj = {};

keys.forEach((key, index) => {
    obj[key] = values[index];
});

console.log("Array to Object:", obj);


// Sort array of objects by salary (ascending)
let sortedEmployees = employees.sort((a, b) => a.salary - b.salary);
console.log("Sorted Employees by Salary:", sortedEmployees);


// ================================
// 6️⃣ Object Destructuring
// ================================

let { name, age } = student;
console.log("Destructured Name:", name);
console.log("Destructured Age:", age);



