// function getTextFile() {
//   fetch("text.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }
// getTextFile();

// function getJsonFile() {
<<<<<<< HEAD
//   fetch("user.json")
=======
//   fetch("users.json")
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }
// getJsonFile();

// function getApi() {
<<<<<<< HEAD
//   fetch("https://jsonplaceolder.typicode.com/posts")
=======
//   fetch("https://jsonplaceholder.typicode.com/posts")
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));
// }
// getApi();

class Request {
<<<<<<< HEAD
  get(url) {
=======
  static get(url) {
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
<<<<<<< HEAD
        .catch((error) => reject(error, "Veri Alınamadı"));
=======
        .catch((error) => reject(error, "Veri alınamadı"));
    });
  }
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error, "Hata Alındı"));
    });
  }
  static put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json;",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error, "Hata Alındı"));
    });
  }
  static delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => resolve("Veri Silme İşlemi Başarılı"))
        .catch((error) => reject(error, "Hata Alındı"));
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
    });
  }
}

<<<<<<< HEAD
Request.get("https://jsonplaceolder.typicode.com/posts").then((data) => {
  console.log(data);
});
=======
// Request.get("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// Request.post("https://jsonplaceholder.typicode.com/posts", {
//   userId: 1,
//   title: "Post Başlık",
//   body: "Post Body",
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// Request.put("https://jsonplaceholder.typicode.com/posts/1", {
//   userId: 1,
//   title: "Post Başlık fdherty",
//   body: "Post Body dyjdtjty",
// })
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

Request.delete("https://jsonplaceholder.typicode.com/posts/2")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
