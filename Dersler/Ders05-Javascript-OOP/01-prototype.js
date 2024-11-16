<<<<<<< HEAD
// // Object Literal
=======
// Object Literal
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
// const person1 = {
//   name: "Varol",
//   age: 30,
//   langs: ["Java", "Javascript", "Python"],
//   address: {
//     city: "Istanbul",
<<<<<<< HEAD
//     street: "Kadıköy",
=======
//     street: "Kadikoy",
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
//   },
//   showInfos: function () {
//     console.log(this.name, this.age, this.langs, this.address);
//   },
// };

// const person2 = {
<<<<<<< HEAD
//   name: "Berkcan",
//   age: 25,
//   langs: ["Java", "Javascript", "Python"],
=======
//   name: "Mehmet",
//   age: 31,
//   langs: ["Go", "Javascript", "Python"],
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
//   address: {
//     city: "Ankara",
//     street: "Cankaya",
//   },
//   showInfos: function () {
//     console.log(this.name, this.age, this.langs, this.address);
//   },
// };

// console.log(person1);
// console.log(person2);

// Yapıcı Fonksiyon (Constructor)
function Person(name, age, langs) {
  this.name = name;
  this.age = age;
  this.langs = langs;

<<<<<<< HEAD
  //   this.showInfos = function () {
  //     console.log(this.name, this.age, this.langs);
  //   };
=======
  // this.showInfos = function () {
  //   console.log(this.name, this.age, this.langs);
  // };
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
}

Person.prototype.showInfos = function () {
  console.log(this.name, this.age, this.langs);
};

function Employee(name, age, langs, salary) {
  Person.call(this, name, age, langs);
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
<<<<<<< HEAD
const emp1 = new Employee("Ahmet", 30, ["Java", "Javascript", "Python"], 4000);
=======

const emp1 = new Employee("Varol", 30, ["Java", "Javascript", "Python"], 4000);
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
console.log(emp1);
emp1.showInfos();

const person1 = new Person("Varol", 30, ["Java", "Javascript", "Python"]);
<<<<<<< HEAD
const person2 = new Person("Berkcan", 31, ["Go", "Javascript", "Python"]);
=======
const person2 = new Person("Mehmet", 31, ["Go", "Javascript", "Python"]);
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413

// console.log(person1);
// console.log(person2);
// person1.showInfos();
// person2.showInfos();
<<<<<<< HEAD

// console.log(person1.langs);
=======
// console.log(person1.langs[0]);
>>>>>>> c5432569b42400a1f15735b3b5c0040c626f2413
