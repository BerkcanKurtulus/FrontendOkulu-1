// function getTextFile() {
//   fetch("text.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }
// getTextFile();

// function getJsonFile() {
//   fetch("user.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }
// getJsonFile();

// function getApi() {
//   fetch("https://jsonplaceolder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }
// getApi();

class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error, "Veri Alınamadı"));
    });
  }
}

Request.get("https://jsonplaceolder.typicode.com/posts").then((data) => {
  console.log(data);
});
