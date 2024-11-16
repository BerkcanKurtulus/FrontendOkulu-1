document.getElementById("veri").addEventListener("click", function () {
<<<<<<< HEAD
=======
  // XMLHttpRequest nesnesi oluşturuluyor
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.onreadystatechange = function () {
    // console.log(xhr.readyState);
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
<<<<<<< HEAD
      //   document.write(xhr.responseText);
    }
    if (xhr.readyState == 4 && xhr.status == 404) {
      console.log("Veri Bulunamadı");
    }
  };
  xhr.open("GET", "./text.txt", true);
=======
      // document.write(xhr.responseText);
    }
    if (xhr.readyState == 4 && xhr.status == 404) {
      console.log("Veri bulunamadı");
    }
  };

  xhr.open("GET", "text.txt", true);
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
  xhr.send();
});
