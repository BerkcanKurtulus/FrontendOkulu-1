document.getElementById("veri").addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.onreadystatechange = function () {
    // console.log(xhr.readyState);
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
      //   document.write(xhr.responseText);
    }
    if (xhr.readyState == 4 && xhr.status == 404) {
      console.log("Veri Bulunamadı");
    }
  };
  xhr.open("GET", "./text.txt", true);
  xhr.send();
});
