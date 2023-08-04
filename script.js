const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// 1. Yeni görev ekleme fonksiyonu
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete">Sil</button>
    <button class="edit">Düzenle</button>
  `;

  const deleteButton = taskItem.querySelector('.delete');
  deleteButton.addEventListener('click', () => {
    deleteTask(taskItem);
  });

  const editButton = taskItem.querySelector('.edit');
  editButton.addEventListener('click', () => {
    editTask(taskItem);
  });

  taskList.appendChild(taskItem);
  taskInput.value = '';
}

// 2. Tamamlanmış görevi silme fonksiyonu
function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}

// 3. Mevcut görevi düzenleme fonksiyonu
function editTask(taskItem) {
  const newText = prompt('Yeni metni giriniz:', taskItem.querySelector('span').textContent);
  if (newText !== null) {
    taskItem.querySelector('span').textContent = newText;
  }
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
