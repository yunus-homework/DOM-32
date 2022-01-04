const getAttributes = document.querySelector("#ulId").attributes;

const arrAttributtesValue = [];
const arrNameAttributtes = [];

for (let takeAttr of getAttributes) {
  arrAttributtesValue.push(takeAttr.textContent);
  arrNameAttributtes.push(takeAttr);
}

console.log(arrAttributtesValue);
console.log(arrNameAttributtes);

const lastLi = document.querySelector("#ulId > li:last-child");
lastLi.innerHTML = `Привет, меня зовут Юнус`;
console.log(lastLi);

const addFirstLi = document.querySelector("#ulId > li:first-child");
addFirstLi.setAttribute("data-my-name", "Yunus");
console.log(addFirstLi);

const deleteUlAttr = document.querySelector("#ulId");
deleteUlAttr.removeAttribute("data-dog-tail");
console.log(deleteUlAttr);

//2

const arr = [1, 2, 3];
const multidimensionalArr = [1, 2, [1.1, 1.2, 1.3], 3];

const arrList = function generateList(array) {
  const addUl = document.createElement("ul");
  for (let i = 0; i < array.length; i++) {
    const addLiItem = document.createElement("li");
    addLiItem.append(
      Array.isArray(array[i])
        ? generateList(array[i])
        : document.createTextNode(array[i])
    );
    addUl.append(addLiItem);
  }
  return addUl;
};
document.body.append(arrList(multidimensionalArr));
console.log(arrList(multidimensionalArr));

//3

const table = document.getElementById("table");

function generateTable(row, cols) {
  let num = 0;

  for (let i = 0; i < row; i++) {
    const tr = document.createElement("tr");

    for (let b = 0; b < cols; b++) {
      ++num;
      const td = document.createElement("td");
      td.innerHTML = num;
      tr.append(td);
    }
    table.append(tr);
  }
}
generateTable(10, 10);
generateTable(10, 5);

// function generateTable(row, cols) {
//   for (let i = 0; i < row; i++) {
//     const tr = document.createElement("tr");

//     for (let b = 0; b <= cols; b++) {
//       const td = document.createElement("td");
//       td.innerHTML = i * 10 + b;
//       tr.append(td);
//     }
//     table.append(tr);
//   }
// }

// generateTable(10, 10);
// generateTable(10, 5);

// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка в консоль :

// Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of)
// и записать значение каждого аттрибута в массив — вывсести этот
// массив в консоль
// Так-же записать в отдельный массив каждое имя аттрибута —
// вывести массив в консоль
// С помощью JS изменить текст в последнем теге li на —
// «Привет меня зовут » + Ваше имя
// Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором
// будет лежать Ваше имя
// Удалить у тега ul аттрибут ‘data-dog-tail‘

// 2. Написать функцию generateList(array), которая принимает массив из
// чисел и массивов чисел (например [1,2,3]) и генерирует список из елементов:

// <ul>
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
// А если в массиве встречается массив (например, [1,2, [1.1,1.2,1.3] ,3])
// то делать вложенный список.
// Для проверки на массив используйте Array.isArray()

// <ul>
// 	<li>1</li>
// 	<li>2</li>
// 	<li>
// 		<ul>
// 			<li>1.1</li>
// 			<li>1.2</li>
// 			<li>1.3</li>
// 		</ul>
// 	</li>
// 	<li>3</li>
// </ul>

// 3. Написать функцию, которая выводит таблицу 10 × 10,
// заполненную числами от 1 до 100
