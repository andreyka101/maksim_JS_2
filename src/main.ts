// import './style.css'




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
let type_num1 = 50
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



alert("hello")
// alert("hello")
// alert("hello")

// сообщение prompt возвращает текст или None
let prom_num = prompt("num ?" , "6")
console.log(prom_num);

// сообщение confirm возвращает boolean
console.log(confirm("да / нет   ?"));




