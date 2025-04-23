function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
  
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.innerHTML = `
      <span onclick="toggleComplete(this)">${taskText}</span>
      <button class="delete-btn" onclick="removeTask(this)">X</button>
    `;
  
    document.getElementById('taskList').appendChild(li);
    input.value = '';
  }
  
  function toggleComplete(element) {
    element.classList.toggle('completed');
  }
  
  function removeTask(button) {
    const li = button.parentElement;
    li.remove();
  }
  