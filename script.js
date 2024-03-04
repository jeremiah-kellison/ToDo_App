// Get the form and the task input element
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');

// Get the ul element
const taskList = document.querySelector('.TaskList ul');

// Add event listener to the form submit event
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get the input value
    const taskText = taskInput.value;

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Append the new list item to the ul
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
});
