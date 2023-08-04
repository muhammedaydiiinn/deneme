// DOM elementlerini seçme
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Yeni görev ekleme fonksiyonu
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') return; // Boş girişi işleme koyma

  // Yeni liste öğesi oluştur
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete">Sil</button>
    <button class="edit">Düzenle</button>
  `;

  // Silme düğmesi olayı
  const deleteButton = taskItem.querySelector('.delete');
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  // Düzenleme düğmesi olayı
  const editButton = taskItem.querySelector('.edit');
  editButton.addEventListener('click', () => {
    const newText = prompt('Yeni metni giriniz:', taskText);
    if (newText !== null) {
      taskItem.querySelector('span').textContent = newText;
    }
  });

  // Listeye öğeyi ekle
  taskList.appendChild(taskItem);

  // Girdi alanını temizle
  taskInput.value = '';
}

// Ekle düğmesine tıklanınca yeni görev ekle
addTaskButton.addEventListener('click', addTask);

// Enter tuşuna basıldığında da yeni görev ekle
taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
