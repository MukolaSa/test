// Напишіть код, виконавши завдання з кожного пункту окремим рядком:

// Створіть порожній об’єкт user.
// Додайте властивість name зі значенням Вілл.
// Додайте властивість surname зі значенням Сміт.
// Змініть значення name на Петро.
// Додайте метод showFullName, який буде виводити в консоль повне ім'я користувача .

const user = {
   name: 'Вілл',
   surname: 'Сміт',
}
user.name = 'Петро'
 function showFullName() {
  console.log( ( this.name + " " + this.surname ));
 }
 showFullName.call(user)

//  const user = {
//    name: 'Вілл',
//    surname: 'Сміт',
//    showName() {
//      console.log(this.name + " " + this.surname);
//    },
//  };
//  user.name = 'Петро'
//  user.showName();