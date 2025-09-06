document.getElementById('addTaskButton').addEventListener('click', function() {
  const taskText = document.getElementById('newTaskInput').value;
  if (taskText) {
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // delete button to the new list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.classList.add('delete-button'); // Optional: for styling

    //  event listener to the delete button
    deleteButton.addEventListener('click', function() {
      listItem.remove(); // Removes the li element
    });

    listItem.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(listItem);
    document.getElementById('newTaskInput').value = '';
  }
});