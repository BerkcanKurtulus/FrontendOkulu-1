//  Değişkenleri oluşturup etiketlerini alıyoruz.
const todoList = document.getElementById("todoList");
const input = document.getElementById("todoCreateInput");
const addButton = document.getElementById("addButton");

// Click event'ı ile butona tıklandığında fonksiyonu çağırıyoruz.
addButton.addEventListener("click", addNewToDo);

// Yeni ToDo ekleme fonsiyonu.

function addNewToDo() {
  if (input.value) {
    const succesButton = createTag("button", "Düzenle", "btn btn-success", null);
    const deleteButton = createTag("button", "Sil", "btn btn-danger", null);
    const div = createTag("div", null, null, [succesButton, deleteButton]);
    const span = createTag("span", input.value, null, null);
    const newToDo = createTag(
      "div",
      null,
      "border-bottom d-flex align-items-center justify-content-between border-primary rounded mb-3 p-1",
      [span, div]
    );
    todoList.appendChild(newToDo);
  } else {
    alert("İnput Boş Olamaz!");
  }
}

function createTag(tagName, value, classList, childTag) {
  const tag = document.createElement(tagName);
  if (value) {
    tag.innerText = value;
  }
  if (classList) {
    tag.className = classList;
  }

  if (childTag) {
    for (let i = 0; i < childTag.length; i++) {
      tag.appendChild(childTag[i]);
    }
  }
  return tag;
}
