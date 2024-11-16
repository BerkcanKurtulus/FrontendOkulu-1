document.getElementById("veri").addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
    const output = document.getElementById("output");
    if (this.status === 200) {
      let data = JSON.parse(xhr.responseText);
      data.forEach(function (item) {
        output.innerHTML += `
        <div>
        Başlık: ${item.title}
        <br>
        Başlık: ${item.body}
        </div>
        <hr>
        `;
      });
    }
  };
  xhr.send();
});
