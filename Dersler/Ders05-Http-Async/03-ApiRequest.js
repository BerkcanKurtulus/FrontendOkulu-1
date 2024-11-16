document.getElementById("veri").addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhr.onload = function () {
<<<<<<< HEAD
    const output = document.getElementById("output");
    if (this.status === 200) {
      let data = JSON.parse(xhr.responseText);
      data.forEach(function (item) {
        output.innerHTML += `
        <div>
        Başlık: ${item.title}
        <br>
        Başlık: ${item.body}
=======
    const cikti = document.getElementById("output");
    if (this.status === 200) {
      let data = JSON.parse(xhr.responseText);
      data.forEach(function (item) {
        // console.log(`
        // Başlık: ${item.title}
        // İçerik: ${item.body}
        // `);
        cikti.innerHTML += `
        <div>
        Başlık: ${item.title}
        <br>
        İçerik: ${item.body}
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
        </div>
        <hr>
        `;
      });
    }
  };
  xhr.send();
});
