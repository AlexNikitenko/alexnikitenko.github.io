// 1)Исходный массив [5, 23, -110, 3, 18, 0, 14], данные в нём не менять. 
// a.Вывести в консоль только нечетные числа; 
// b.Вывести в консоль массив, каждая ячейка которого будет увеличена на 20; 
// c.Вывести в консоль массив, состоящий только из положительных нечетных чисел; 
// d.Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки. 
// e.Проверить, и вывести в консоль результат проверки, есть ли в массиве число 5. 
// 2) f.Получить массив без первого элемента, вывести в консоль. 
// g.Отсортировать массив по возрастанию, вывести в консоль. 
// h) Определить, есть ли в массиве числа, кратные 5.

const arr = [5, 23, -110, 3, 18, 0, 14];

// a.Вывести в консоль только нечетные числа; 

arr.forEach((value, index) => {
    return (arr[index] % 2 !== 0) ? console.log("Нечетные числа массива: ", value) : false;
})

// b.Вывести в консоль массив, каждая ячейка которого будет увеличена на 20; 

let arr2 = arr.map(value => value + 20);
console.log("Массив, каждая ячейка которого увеличена на 20", arr2);

// c.Вывести в консоль массив, состоящий только из положительных нечетных чисел; 

let arr3 = arr.filter((value, index) => ((value > 0) && (value % 2 !== 0)));
console.log("Массив, состоящий только из положительных нечетных чисел", arr3);

// d.Вывести в консоль сумму остатков от целочисленных делений на 3 каждой ячейки.

let arr4 = arr.reduce((sum, elem, index) => {
    return sum = sum + (elem % 3);
}, 0);
console.log("Сумма остатков от целочисленных делений на 3 каждой ячейки:", arr4);

// e.Проверить, и вывести в консоль результат проверки, есть ли в массиве число 5. 

let result = arr.includes(5);
console.log("Результат проверки, есть ли в массиве число 5", result);

// f.Получить массив без первого элемента, вывести в консоль. 

let arr5 = arr.slice(1);
console.log("Массив без первого элемента", arr5);
// g.Отсортировать массив по возрастанию, вывести в консоль. 

let arr6 = arr.sort((a, b) => a - b);
console.log("Массив, отсортированный по возрастанию", arr6);

// h) Определить, есть ли в массиве числа, кратные 5.

let result2 = arr.some((elem, index) => (elem % 5) === 0);
console.log("Результат проверки, есть ли в массиве числа, кратные 5", result2);