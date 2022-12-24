# test
// 5*. Створити обєкт піци з полями і методами
//     В обєкті має бути такі поля і методи:

//     5.1 поле для збереження розміру піци
//     5.2 поле для збереження списку добавок
//     5.3 поле для збереження списку соусів
//     5.4 метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
//     5.5 метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
//     5.6 метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
//     5.7 метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
//     5.8 метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
//     5.9 метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
//     5.10 метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
//     5.11 метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
//     5.12 метод що показує час приготуванни в хвилинах в залежності від складності піци
//     5.13 метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
const Sizes = {
   BIG: { price: 25, cal: 100, time: 15 },
   SMALL : { price : 15, cal: 50, time: 7 },
   MEDIUM: { price : 15, cal: 50, time: 7 }
   }
const STUFFING = {
   CHEESE: { price : 6.5, cal: 45, time: 2 },
   BEACON : { price : 10, cal: 70, time: 6 },
   TOMATO : { price : 12.1, cal: 4, time: 5 },
   CHICKEN : { price : 9.3, cal: 30, time: 5.1 }
   }
const SAUCES = {
   MUSTARD: { price : 3, cal: 5, time: 1 },
   KETCHUP: { price : 4.2, cal: 20, time: 1.5 },
   BOLOGNESE: { price : 7.5, cal: 50, time: 3 }
   }
// ===============================================================
// 1
console.log(Sizes.BIG = 'price: 25, cal: 100, time: 15');
console.log(Sizes.SMALL = 'price : 15, cal: 50, time: 7');
console.log(Sizes.MEDIUM = 'price : 15, cal: 50, time: 7');
// 2
const keys = Object.keys(STUFFING);
console.log(keys);
// 3
const key = Object.keys(SAUCES)
console.log(key);
// 4
keys.push('CUCUMBER');
console.log(keys);
// 5
key.push('MARMIT')
console.log(key);
// 6
console.log(keys.pop());
console.log(keys);
// 7    
console.log(key.pop());
console.log(key);
// 8
const size = Object.values(Sizes)
console.log(size);

// const stuff = Object.values(STUFFING)
// console.log(stuff);

// const sauce = Object.values(SAUCES)
// console.log(sauce);

// const one = size.filter(function(number) {
//      console.log(number);
//     })

// const two = size.filter(function(number) {
//      console.log(number);
//     })
// const three = size.filter(function(number) {
//         return number > 1
//     })

// 5.12 метод що показує час приготуванни в хвилинах в залежності від складності піци
// 5.13 метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)