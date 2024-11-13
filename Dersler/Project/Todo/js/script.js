// Değişkenleri oluşturup etiketlerini alıyoruz.
const todoList = document.getElementById("todoList");
const input = document.getElementById("todoCreateInput");
const addButton = document.getElementById("addButton");

// Sayfa yüklendiğinde LocalStorage'dan görevleri getirip ekrana yükleme
document.addEventListener("DOMContentLoaded", loadTodosFromLocalStorage);

// Click event'i ile butona tıklandığında fonksiyonu çağırıyoruz.
addButton.addEventListener("click", addNewToDo);

// Yeni ToDo ekleme fonksiyonu.
function addNewToDo() {
  if (input.value) {
    // Görevi ekliyoruz ve HTML olarak render ediyoruz.
    renderTodoItem(input.value);
    // Görevi LocalStorage'e kaydediyoruz.
    saveToLocalStorage(input.value);
    // Input'u temizliyoruz.
    input.value = "";
  } else {
    alert("Input boş olamaz!");
  }
}

// Eleman oluşturma fonksiyonu.
function createTag(tagName, value, classList, childTag, listener) {
  const tag = document.createElement(tagName);

  if (value) {
    tag.textContent = value;
  }

  if (classList) {
    tag.className = classList;
  }

  if (childTag) {
    for (let i = 0; i < childTag.length; i++) {
      tag.appendChild(childTag[i]);
    }
  }

  if (listener) {
    tag.addEventListener("click", listener);
  }
  return tag;
}

// Yeni bir görevi ekrana render eden fonksiyon.
function renderTodoItem(todoText) {
  const succesButton = createTag("button", "Düzenle", "btn btn-success me-1", null, editToDo);
  const deleteButton = createTag("button", "Sil", "btn btn-danger", null, deleteToDo);
  const div = createTag("div", null, null, [succesButton, deleteButton]);
  const span = createTag("span", todoText, null, null);
  const newToDo = createTag(
    "div",
    null,
    "border-bottom d-flex align-items-center justify-content-between border-primary rounded mb-3 p-1",
    [span, div]
  );
  todoList.appendChild(newToDo);
}

// Görevleri LocalStorage'a kaydeden fonksiyon.
function saveToLocalStorage(todoText) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Görevleri LocalStorage'dan alıp ekrana yükleyen fonksiyon.
function loadTodosFromLocalStorage() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach(todoText => {
    renderTodoItem(todoText);
  });
}

// Düzenleme işlemini gerçekleştiren fonksiyon.
function editToDo(event) {
  const toDoContent = event.target.parentElement.previousSibling;
  const oldContent = toDoContent.textContent;
  const newContent = prompt("Görevinizi Güncelleyin.", oldContent);

  if (newContent !== null) {
    toDoContent.textContent = newContent;
    updateLocalStorage(oldContent, newContent);
  }
}

// LocalStorage'da görevi güncelleyen fonksiyon.
function updateLocalStorage(oldContent, newContent) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  const todoIndex = todos.indexOf(oldContent);
  if (todoIndex !== -1) {
    todos[todoIndex] = newContent;
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

// Silme işlemini gerçekleştiren fonksiyon.
function deleteToDo(event) {
  const toDoItem = event.target.closest("div.border-bottom");
  const toDoContent = toDoItem.querySelector("span").textContent;
  toDoItem.remove();
  removeFromLocalStorage(toDoContent);
}

// LocalStorage'dan görevi silen fonksiyon.
function removeFromLocalStorage(todoText) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter(todo => todo !== todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
}
