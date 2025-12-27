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



// alert("hello")
// // alert("hello")
// // alert("hello")

// // сообщение prompt возвращает текст или None
// let prom_num = prompt("num ?" , "6")
// console.log(prom_num);

// // сообщение confirm возвращает boolean
// console.log(confirm("да / нет   ?"));




// let arr = []
// let arr = new Array()
let arr = [1, 2, 3, 4, 5] as Array<number>
let arr_2 = ["qwew1", "qwew2", "qwew3",] as Array<number | string>
let arr_3 = ["qwew1", 9, "qwew2", "qwew3", 9] as Array<any>

console.log(arr);
console.log(arr_2);
console.log(arr_3);



// let num5 = 10
// while (num5 != 20) {
//     console.log(num5);
//     num5 += 1
//     num5++
// }


// let num5 = 20
// while(num5 < 20){
//     console.log(num5);
//     num5+=1
// }
// do{
//     console.log(num5);
//     num5+=1
// }while(num5 < 20)



// for (let i = 0; i != 10; i++) {
//     console.log(i);
// }


// let num_i = 3
// for (; num_i < 30; num_i *= 2) {
//     console.log(num_i);
// }


// let num_i = 3
// for (; num_i < 30;) {
//     console.log(num_i);
//     num_i *= 2
// }



// let num_a = 4
// let num_b = 8
// let num_a: number = 4, num_b = 8




// for (let a = 0, b=20; a!=b;a++ , b--) {
//     console.log(a,b);
// }




// console.log(typeof fun1);
// console.log(fun1);
// console.log(fun1(true , 4));


function fun1(a: any, b: number, s = "text") {
    console.log("hi fun1");
    console.log(a, b, s);
    return (a + b) as number
    return (a + b) as void
}



// let num_f:any = 4
// console.log(num_f);

// num_f = function(){
//     console.log("hi");
//     console.log("text");
// }
// num_f()



let num_f2 = () => alert("2334")

// num_f2()


let num_f3 = (a: any) => {
    a += "text"
    console.log(a);
}
num_f3(0);


(() => {
    console.log("none fun");
})()





// const span1 = document.querySelector("span") as HTMLElement
const span1 = document.querySelector("span") as HTMLSpanElement
console.log(span1);
span1.innerText = 'text'
span1.innerText = '<div>text D</div>'
span1.innerHTML = '<div>text D</div>'
// span1.innerHTML = 'text'



const span2 = document.querySelector(".span_box") as HTMLSpanElement
span2.innerText = 'text box'
span2.style.backgroundColor = "#FF9E9EFF"





const button1 = document.querySelector("button") as HTMLButtonElement
// function funClick(){
//     alert("text")
// }
// button1.addEventListener("click",funClick)


// button1.addEventListener("click",()=>{
//     span1.innerText = 'text'
// })









// const num_s=1
// let num_s=1;
// // var
// (() => {
//     num_s = 5
//     console.log("num_s fun" , num_s);
// })()
// console.log("num_s" , num_s);




// (() => {
//     let num_s = 5
//     console.log("num_s fun" , num_s);
// })()
// console.log("num_s" , num_s);



