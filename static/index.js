document.addEventListener('DOMContentLoaded', function() {
    var taskInput = document.getElementById('task-input');
    var addTaskButton = document.getElementById('add-task-btn');
    var taskList = document.getElementById('task-list');
  
    addTaskButton.addEventListener('click', function() {
      var taskText = taskInput.value;
      if (taskText.trim() !== '') {
        var taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        var taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        
        removeButton.addEventListener('click', function() {
          taskItem.remove();
        });
        
        checkbox.addEventListener('change', function() {
          if (checkbox.checked) {
            taskItem.classList.add('completed');
          } else {
            taskItem.classList.remove('completed');
          }
        });
        
        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(removeButton);
        
        taskList.appendChild(taskItem);
        
        taskInput.value = '';
      }
    });
  });
  