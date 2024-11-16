document.getElementById("getButton").addEventListener("click", getAllData);

function getAllData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    let list = document.getElementById("employees");
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
<<<<<<< HEAD
      data.forEach(user => {
        list.innerHTML += `
        <tr>
            <td>${user.name}</td>
            <td>${user.department}</td>
            <td>${user.salary}</td>
        </tr>
          `;
=======
      data.forEach((user) => {
        list.innerHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.department}</td>
          <td>${user.salary}</td>
        </tr>
        `;
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
      });
    } else {
      console.log("Bir Hata Oluştu!");
    }
  };
  xhr.send();
}
