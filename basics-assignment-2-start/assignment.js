const task3Element = document.getElementById('task-3');

// 1. Create two functions: one without parameters and one with name parameter
function showAlert() {
    alert('Hello! This is a test alert!');
}

function showNameAlert(name) {
    alert('Hello ' + name + '!');
}

// 2. Call both functions directly
showAlert();
showNameAlert('Mohammad');

// 3. Add event listener to task3Element
task3Element.addEventListener('click', showAlert);

// 4. Create function that takes three string parameters
function combineStrings(str1, str2, str3) {
    return str1 + ' ' + str2 + ' ' + str3;
}

// 5. Call the new function and alert the result
alert(combineStrings('Hello', 'from', 'JavaScript!'));