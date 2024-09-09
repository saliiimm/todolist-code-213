function addTask() {
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task');
  }

  let taskList = document.querySelector('.myItems');

  let li = document.createElement('li');

  let taskSpan = document.createElement('span');

  taskSpan.textContent = taskText;

  let btnContainer = document.createElement('div');
  let editbutton = document.createElement('button');
  let deletebutton = document.createElement('button');

  btnContainer.classList.add('action-btns');
  editbutton.textContent = 'Edit';
  editbutton.classList.add('edit');
  deletebutton.textContent = 'Delete';
  deletebutton.classList.add('delete');

  editbutton.onclick = function () {
    editTask(taskSpan, li);
  };
  deletebutton.onclick = function () {
    taskList.removeChild(li);
  };

  btnContainer.appendChild(editbutton);
  btnContainer.appendChild(deletebutton);

  li.appendChild(taskSpan);
  li.appendChild(btnContainer);
  taskList.appendChild(li);
}

function editTask(taskSpan, li) {
  let currentValue = taskSpan.textContent;
  let newValue = prompt('Edit task:', currentValue);

  if (newValue !== null && newValue.trim() !== '') {
    taskSpan.textContent = newValue.trim();
  } else {
    alert('task cant be empty');
  }
}
