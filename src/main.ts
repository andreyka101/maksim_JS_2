// подключаем стили через ts
import './style.scss'




// вывод данных
console.log("hello TS");



// typeof - возвращает тип данных

// number
// console.log(typeof(0));
// number
// console.log(typeof(0.1));
// string
// console.log(typeof("344"));
// boolean
// console.log(typeof(true)); 
// function
// console.log(typeof(alert));
// object
// console.log(typeof(console));
// null - пустота
// let num_none1 = null
// console.log(num_none1);
// undefined - переменная созданная пустой
// let num_none2
// console.log(num_none2);
// Infinity - ошибка вычисления чисел
// let num_none3 = 2 / 0
// console.log(num_none3);
// NaN - ошибка вычисления разных тип данных
// let num_none4 = 20 / "1a0"
// console.log(num_none4);



// объявление переменной
// let type_num1 = 50
// let type_num1 = 50 as number
// объявление пустой переменной
// let type_num1
// объявление пустой переменной с типом
// let type_num1 : number
// console.log(type_num1);
// меняем переменную
// type_num1 = 200
// console.log(type_num1);
// переменную с типом number нельзя менять на string
// type_num1 = "str"
// console.log(type_num1);

// any - любой тип
// let type_num2 : any = 'test'
// // let type_num2 = 'test' as any
// console.log(type_num2);
// type_num2 = 200
// console.log(type_num2);
// type_num2 = "str"
// console.log(type_num2);


// константу менять нельзя
// const num_const = 5
// num_const = 10
// console.log(num_const);



// условие
// let num_if = 2
// if(num_if < 20){
//     console.log("ok");
// }

// иначе
// if(num_if > 20){
//     console.log("ok");
// }
// else{
//     console.log("not");
// }

// иначе если
// if(num_if > 20){
//     console.log("ok");
// }
// else if(num_if < 20){
//     console.log("else ok");
// }
// else{
//     console.log("not");
// }


// неточное сравнение
// let num_if_2 = 30
// if(num_if_2 == "30"){
//     console.log("ok");
// }
// else{
//     console.log("not");
// }

// точное сравнение
// if(num_if_2 === "30"){
//     console.log("ok");
// }
// else{
//     console.log("not");
// }



//  арифметические вычисления
// -
// +
// /
// *
// **
// %
// console.log(20/3);
// console.log(20%3);



// !
// alert сообщение на сайте
// alert("hello")
// alert("hello")
// alert("hello")

// сообщение prompt возвращает текст или None
// let prom_num = prompt("num ?")
// let prom_num = prompt("num ?" , "6")
// console.log(prom_num);

// сообщение confirm возвращает boolean
// console.log(confirm("да / нет   ?"));



// создание пустого массива
// let arr = []
// let arr = new Array()
// создание массива чисел
let arr = [1, 2, 3, 4, 5] as Array<number>
// создание массива чисел и строк
let arr_2 = ["qwew1", 9, "qwew2", "qwew3", 9,] as Array<number | string>
// создание массива любого типа
let arr_3 = ["qwew1", 9, true] as Array<any>

console.log(arr);
console.log(arr_2);
console.log(arr_3);



// цикл while 
// let num5 = 10
// while (num5 != 20) {
//     console.log(num5);
//     num5 += 1
//     num5++
// }


// цикл do while - делает минимум один оборот цикла , даже если в условии false
// let num5 = 20
// while(num5 < 20){
//     console.log(num5);
//     num5+=1
// }
// do{
//     console.log(num5);
//     num5+=1
// }while(num5 < 20)



// for(начало; условие; шаг)
// for (let i = 0; i != 10; i++) {
//     console.log(i);
// }

// необязательно писать в цикле for начало и шаг
// let num_i = 3
// for (; num_i < 30; num_i *= 2) {
//     console.log(num_i);
// }

// необязательно писать в цикле for начало и шаг
// let num_i = 3
// for (; num_i < 30;) {
//     console.log(num_i);
//     num_i *= 2
// }

// цикл for может работать с несколькими переменными
// let num_a = 4
// let num_b = 8
// let num_a: number = 4, num_b = 8
// for (let a = 0, b=20; a!=b;a++ , b--) {
//     console.log(a,b);
// }




// вызов функции
// console.log(typeof fun1);
// console.log(fun1);
// console.log(fun1(true , 4));
// создание функции
function fun1(a: any, b: number, s = "text") {
    console.log("hi fun1");
    console.log(a, b, s);
    return (a + b) as number
    return (a + b) as void
}


// создание функции и перезапись переменной
let num_f: any = 4
// console.log(num_f);
num_f = function () {
    console.log("hi");
    console.log("text");
}
// num_f()


// создание стрелочной функции с одной строкой
let num_f2 = () => alert("2334")
// num_f2()


// создание стрелочной функции с несколькими строками строками
let num_f3 = (a: any) => {
    a += "text"
    console.log(a);
}
num_f3(0);


// создание и запуск функции без сохранения
(() => {
    console.log("none fun");
})()




// с помошью document.querySelector достаём элемент HTML по (тегу, классу, ID)
// const span1 = document.querySelector("span") as HTMLElement
const span1 = document.querySelector("span") as HTMLSpanElement
console.log(span1);
// innerText - вставляет текст в элемент HTML
span1.innerText = 'text'
span1.innerText = '<div>text D</div>'
// innerText - вставляет HTML в элемент HTML
span1.innerHTML = 'text'
span1.innerHTML = '<div>text D</div>'


// с помошью document.querySelector достаём элемент HTML по (тегу, классу, ID)
const span2 = document.querySelector(".span_box") as HTMLSpanElement
span2.innerText = 'text box'
// через .style в элементе можно поменять стили
span2.style.backgroundColor = "#FF9E9EFF"
span2.style.padding = "40px 10px"


// с помошью document.querySelector достаём элемент HTML по (тегу, классу, ID)
const button1 = document.querySelector("button") as HTMLButtonElement
function funClick() {
    alert("text")
}
// addEventListener(опция , функция) - обработка событий мышки над элементом
// вызываем функцию funClick при нажатии на элемент button1
// button1.addEventListener("click",funClick)
// 
// вызываем стрелочную функцию при нажатии на элемент button1
// button1.addEventListener("click",()=>{
//     span1.innerText = 'text'
// })











// Если переменная let глобальная то её можно поменять внутри функции и класса
// let num_s=1;
// (() => {
//     num_s = 5
//     console.log("num_s fun" , num_s);
// })()
// console.log("num_s" , num_s);



// Let созданная внутри условия или цикла уничтожается после окончания условия или цикла
// if(true){
//     let num_s = 5
//     console.log("num_s fun" , num_s);
// }
// console.log("num_s" , num_s);



// Изменяемая переменная var созданная внутри условия или цикла остаётся после окончания
if (true) {
    var num_s2 = 20
    console.log("num_s2 fun", num_s2);
}
console.log("num_s2", num_s2);




const el_but = document.querySelector("#but") as HTMLDivElement
el_but.addEventListener("click", function () {
    el_but.style.bottom = "0%"
    el_but.style.left = "34%"
})



// ! +("5") - Преобразуем строку в число
console.log(+("5") + 5);



// создание массив чисел и строк
let arr2 = [1, 2, 3, 4, 5, 6] as Array<number | string>
// создаем массив с массивами
// let arrx2 = [
// [1,2,3],
// [4,5,6],
// [7,8,9],
// ] as Array<Array<number>>
console.log(arr2);

// добавляет элементы в конец
arr2.push(99)
console.log(arr2);

// извлекает элемент из конца
arr2.pop()
console.log(arr2);

// извлекает элемент из начала
arr2.shift()
console.log(arr2);

// добавляет элементы в начало
arr2.unshift(88)
console.log(arr2);

arr2.splice(3, 1) // начиная с индекса 3, удалит 1 элемент
arr2.splice(3) // удалит всё начиная с индекса 3
console.log(arr2);

// после удаления вставляем в конец элементы
// arr2.splice(2,0 , "a","b")
// arr2.splice(2,2 , "a","b")
// arr2.splice(2,4 , "a","b")
console.log(arr2);

arr2.splice(-3)
console.log(arr2);

// создаём новый массив, в котором копирует данные из других массивов
// console.log(arr2.concat([11,22]))
// arr2 = arr2.concat([11,22])
// arr2 = arr2.concat(11,22)
arr2 = arr2.concat([11, 22], [33, 44])
console.log(arr2);

// запускам функцию для каждого элемента массива
// arr2.forEach((item , index, array)=>{
//     console.log(item , index, array);
// })
// arr2.forEach((item) => {
//     console.log(item);
// })
// function arrfun(item: any, index: number, array: Array) {
//     console.log(item, index, array);
// }
// arr2.forEach(arrfun)











