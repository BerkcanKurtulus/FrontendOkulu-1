function getData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof data === "number") {
        let result = `Sonuç: ${data * 2}`;
        resolve(result);
      } else {
<<<<<<< HEAD
        reject("Lütfen sayi giriniz.");
=======
        reject("Lütfen bir sayı giriniz.");
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
      }
    }, 2000);
  });
}

getData(10)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
