const task3Element = document.getElementById('task-3');

// 1. Create a function that takes an argument (a number) and returns the square of that number (the number multiplied by itself).
function square(number) {
    return number * number;
}

// 2. Call the function with the value 10 and log the result to the console.
console.log(square(10));

// 3. Create a function that takes two arguments (a number and a string) and returns the string repeated as many times as the number specifies.
function repeatString(number, string) {
    return string.repeat(number);
}

// 4. Call the function with the values 5 and "Hello" and log the result to the console.
console.log(repeatString(5, "Hello"));

// 5. Create a function that takes three arguments (a string, a number, and a boolean) and returns a string that combines all three arguments in a specific format.
function formatString(string, number, boolean) {
    return `${string} ${number} ${boolean}`;
}