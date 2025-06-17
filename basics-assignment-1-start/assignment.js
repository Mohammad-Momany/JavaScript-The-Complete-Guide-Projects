// 1. Create two variables: One that holds a fictional user input (a number of
// your choice) and one that holds no value initially (e.g. "result").
let userNumberInput = 10;
let result;

// 2. Set the result variable to 18 plus the value stored in user input.
result = 18 + userNumberInput;

// 3. Add three additional lines of code where you change the result variable
result = result - 5;
result = result * 2;
result = result / 3;

// 4. Think about the value stored in the user input variable you also created
// - did that value change?
console.log(userNumberInput); // 10

// 5. alert() the result and the user input variables (in two separate alert() calls).
alert("User Input: " + userNumberInput);
alert("Result: " + result);